import { createApp } from 'vue'
import './stylesheets/main.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../src/pages/HomePage.vue'
import EventCalendar from './pages/EventCalendar.vue'
import FieldhouseInfo from './pages/FieldhouseInfo.vue'
import BoxOffice from './pages/BoxOffice.vue'
import EventPlanning from './pages/EventPlanning.vue'

const delay = ms => new Promise(res => setTimeout(res, ms));

var currentTrans = ""

const routes = [
  { path: '/', component: HomePage },
  { path: '/calendar', component: EventCalendar },
  { path: '/info', component: FieldhouseInfo },
  { path: '/office', component: BoxOffice },
  { path: '/planning', component: EventPlanning}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.afterEach((to, from) => {
  const order = ["/", "/calendar", "/office", "/info", "/planning"]
  const highlightOrder = ["4vw", "23vw", "38.7vw", "54.5vw", "70.6vw"]
  const toDepth = order.indexOf(to.path)
  const fromDepth = order.indexOf(from.path)
  if(toDepth == fromDepth) {
    to.meta.transition = 'entrance'
    currentTrans = 'entrance'
  }
  else {
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    currentTrans = to.meta.transition;
    document.getElementById("highlight").style.left = highlightOrder[toDepth];
  }
})

createApp(App)
    .use(router)
    .mount('#app')

export { currentTrans }