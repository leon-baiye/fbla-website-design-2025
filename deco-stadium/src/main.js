import { createApp } from 'vue'
import './stylesheets/main.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../src/pages/HomePage.vue'
import EventCalendar from './pages/EventCalendar.vue'
import StadiumInfo from './pages/StadiumInfo.vue'
import BoxOffice from './pages/BoxOffice.vue'
import EventPlanning from './pages/EventPlanning.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/calendar', component: EventCalendar },
  { path: '/info', component: StadiumInfo },
  { path: '/office', component: BoxOffice },
  { path: '/planning', component: EventPlanning}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.afterEach((to, from) => {
  const order = ["/", "/calendar", "/office", "/info", "/planning"]
  const toDepth = order.indexOf(to.path)
  const fromDepth = order.indexOf(from.path)
  console.log(to, from)
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

createApp(App)
    .use(router)
    .mount('#app')
