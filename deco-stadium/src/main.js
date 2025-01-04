import { createApp } from 'vue'
import './stylesheets/main.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../src/pages/HomePage.vue'
import EventCalendar from './pages/EventCalendar.vue'
import FieldhouseInfo from './pages/FieldhouseInfo.vue'
import BoxOffice from './pages/BoxOffice.vue'
import EventPlanning from './pages/EventPlanning.vue'
import ModelView from './pages/ModelView.vue'
import { TroisJSVuePlugin } from 'troisjs';

const delay = ms => new Promise(res => setTimeout(res, ms));

var currentTrans = ""

const routes = [
  { path: '/', component: HomePage },
  { path: '/calendar', component: EventCalendar },
  { path: '/info', component: FieldhouseInfo },
  { path: '/office', component: BoxOffice },
  { path: '/planning', component: EventPlanning},
  { path: '/model', component: ModelView},
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
          onBecomeTrue(true)
      }
      else if (!isTrue && wasTrue) {
          onBecomeFalse(false)
      }
      wasTrue = isTrue
  }
}

router.afterEach(async function(to, from) {
  const order = ["/", "/calendar", "/office", "/info", "/planning", "/model"]
  const highlightOrder = ["4vw", "23vw", "38.7vw", "54.5vw", "70.6vw"]
  const toDepth = order.indexOf(to.path)
  const fromDepth = order.indexOf(from.path)
  if(toDepth == fromDepth) {
    to.meta.transition = 'entrance'
    currentTrans = 'entrance'
  }
  else if(to.path == "/model") {
    to.meta.transition = "model"
    currentTrans = 'model'
    document.getElementById("head").style.height = "0vw"
    document.getElementById("head2").style.height = "0vw"
    document.getElementById("highlight").style.height = "0vw"
    document.getElementById("head").style.opacity = 0
  }
  else if(from.path == "/model") {
    to.meta.transition = "model"
    currentTrans = 'none'
  }
  else {
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    currentTrans = to.meta.transition;
    document.getElementById("highlight").style.left = highlightOrder[toDepth];
  }
})

createApp(App)
    .use(router)
    .use(TroisJSVuePlugin)
    .mount('#app')

export { currentTrans, createStateChangeDetector }