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
  var highlightOrder
  if(window.outerWidth < 1366) {
    highlightOrder = ["2vw", "19.3vw", "35.2vw", "50.9vw", "67.2vw", "83.5vw", "83.5vw"]
  }
  else {
    highlightOrder = ["2vw", "22.3vw", "38.7vw", "54.5vw", "70.2vw", "87.5vw", "87.5vw"]
  }
  const toDepth = order.indexOf(to.path)
  const fromDepth = order.indexOf(from.path)
  if((toDepth == fromDepth)) {
    if(window.outerWidth > 1000) {
      to.meta.transition = 'entrance'
      currentTrans = 'entrance'
    }
    else {
      to.meta.transition = 'none'
      currentTrans = 'none' 
    }
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