import { createApp } from 'vue'
import './stylesheets/main.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../src/pages/HomePage.vue'
import EventCalendar from './pages/EventCalendar.vue'
import GymInfo from './pages/GymInfo.vue'
import BoxOffice from './pages/BoxOffice.vue'
import EventPlanning from './pages/EventPlanning.vue'
import VirtualTour from './pages/VirtualTour.vue'
import GymHistory from './pages/GymHistory.vue'
import TourBooking from './pages/TourBooking.vue'

const delay = ms => new Promise(res => setTimeout(res, ms));

var currentTrans = ""

const routes = [
  { path: '/', component: HomePage },
  { path: '/calendar', component: EventCalendar },
  { path: '/info', component:  GymInfo },
  { path: '/office', component: BoxOffice },
  { path: '/planning', component: EventPlanning },
  { path: '/virtualtour', component: VirtualTour },
  { path: '/history', component: GymHistory },
  { path: '/tour', component: TourBooking } 
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

function createStateChangeDetector(checkCondition, onBecomeTrue, onBecomeFalse, extraInfo = '') {
  let wasTrue = false
  return function() {
      var isTrue = checkCondition()
      if(isTrue && !wasTrue) {
         if(extraInfo == '') {
          onBecomeTrue(true)
         }
         else {
          onBecomeTrue(extraInfo)
         }
      }
      else if (!isTrue && wasTrue) {
          if(typeof onBecomeFalse == "function") {
          onBecomeFalse(false)
          }
      }
      wasTrue = isTrue
  }
}

router.afterEach(async function(to, from) {
  const order = ["/", "/calendar", "/office", "/info", "/planning", "/history", "/tour"]
  const highlightOrder = ["4vw", "23vw", "38.7vw", "54.5vw", "69.8vw", "85.5vw", "85.5vw"]
  const toDepth = order.indexOf(to.path)
  const fromDepth = order.indexOf(from.path)
  if(toDepth == fromDepth) {
    to.meta.transition = 'entrance'
    currentTrans = 'entrance'
  }
  else if(to.path == "/virtualtour") {
    to.meta.transition = "virtualtour"
    currentTrans = 'virtualtour'
    document.getElementById("head").style.height = "0vw"
    document.getElementById("head2").style.height = "0vw"
    document.getElementById("highlight").style.height = "0vw"
    document.getElementById("head").style.opacity = 0
    await delay(1000)
    document.getElementById("exit").style.opacity = 0.5
  }
  else if(from.path == "/virtualtour") {
    document.getElementById("exit").style.opacity = 0
    to.meta.transition = "virtualtour"
    document.getElementById("head").style.height = "8vw"
    document.getElementById("head2").style.height = "8vw"
    document.getElementById("highlight").style.height = "16vw"
    document.getElementById("highlight").style.left = "4vw"
    await delay(1000)
    currentTrans = 'none'
  }
  else {
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    currentTrans = to.meta.transition;
    document.getElementById("indicator").style.left = highlightOrder[toDepth];
    if(toDepth < fromDepth) {
      document.getElementById("slideanim").style.right = "unset"
      document.getElementById("slideanim").style.left = highlightOrder[fromDepth]
      await delay(50)
      document.getElementById("slideanim").style.left = highlightOrder[toDepth]
      if(fromDepth - toDepth == 1) {
        document.getElementById("slide1").classList.add("smallerslide-active")
        await delay(1000)
        document.getElementById("slide1").classList.remove("smallerslide-active")
      }
      else {
        document.getElementById("slide1").classList.add("generalslide-active")
        await delay(1000)
        document.getElementById("slide1").classList.remove("generalslide-active")
      }
    }
    else if(fromDepth < toDepth) {
      document.getElementById("slideanim").style.left = "unset"
      document.getElementById("slideanim").style.right = (84 - Number(highlightOrder[fromDepth].replace("vw", ""))).toString() + "vw"
      await delay(50)
      document.getElementById("slideanim").style.right = (84 - Number(highlightOrder[toDepth].replace("vw", ""))).toString() + "vw"
      if(toDepth - fromDepth == 1) {
        document.getElementById("slide1").classList.add("smallerslide-active")
        await delay(1000)
        document.getElementById("slide1").classList.remove("smallerslide-active")
      }
      else {
        document.getElementById("slide1").classList.add("generalslide-active")
        await delay(1000)
        document.getElementById("slide1").classList.remove("generalslide-active")
      }
    }
  }
})

createApp(App)
    .use(router)
    .mount('#app')

export { currentTrans, createStateChangeDetector }