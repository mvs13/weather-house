import { createMemoryHistory, createRouter } from 'vue-router'

import WeatherBase from '../components/WeatherBase.vue'
import WindowsList from '../components/windows/WindowsList.vue'
import WinWeatherAPI  from '../components/windows/WinWeatherAPI.vue'
import WinYndexAPI from '../components/windows/WinYandexAPI.vue'


const routes = [
  { path: '/', component: WeatherBase },
  {
    path: '/win-list',
    component: WindowsList,
    children: [
      { path: "weather", component: WinWeatherAPI },
      { path: "yandex", component: WinYndexAPI }
    ]
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router