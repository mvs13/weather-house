import { createMemoryHistory, createRouter } from 'vue-router'

import WeatherTower from  '../components/WeatherTower.vue'
import WindowsList from '../components/windows/WindowsList.vue'
import WinWeatherAPI  from '../components/windows/WinWeatherAPI.vue'
import WinYandexAPI from '../components/windows/WinYandexAPI.vue'
import WinOpenMeteoAPI from '../components/windows/WinOpenMeteoAPI.vue'

const routes = [
  { path: '/', component: WeatherTower },
  {
    path: '/win-list',
    component: WindowsList,
    children: [
      { path: "weather", component: WinWeatherAPI },
      { path: "yandex", component: WinYandexAPI },
      { path: "openmeteo", component: WinOpenMeteoAPI }
    ]
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router