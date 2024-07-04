<script setup>
import { ref, watch } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCloudSun,
  faTemperatureHalf,
  faLocationDot,
  faDroplet,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "../../stores/location";
const locator = useLocation();

const urlAPI = `https://api.open-meteo.com/v1/forecast?`;
// const shotAPIURL = `https://api.open-meteo.com/v1/forecast?latitude=${pos.lat}&longitude=${pos.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m&forecast_days=1`;

let temperature = "";
let humidity = "";
let wind = "";

const props = defineProps({
  view: {
    type: String,
    default: "short",
    validator(value) {
      return ["short", "full"].includes(value);
    },
  },
});

switch (props.view) {
  case "short":
    getShortWeather(getShortURL(locator.geo));
    break;

  default:
    break;
}

locator.$subscribe((mutation, state) => {
  console.log(state);
  getShortWeather(getShortURL(locator.geo));
});

function getShortWeather(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (!data.error) {
        temperature = `${data.current.temperature_2m}${data.current_units.temperature_2m}`;
        humidity = `${data.current.relative_humidity_2m}${data.current_units.relative_humidity_2m}`;
        wind = `${data.current.wind_speed_10m}${data.current_units.wind_speed_10m}`;
      }
    });
}

function getShortURL(position) {
  return `${urlAPI}latitude=${position.lat}&longitude=${position.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m&forecast_days=1`;
}
</script>

<template>
  <div :key="locator.position">
    <ul v-if="props.view === 'short'" class="shot-view">
      <li>
        <span class="icon">
          <FontAwesomeIcon :icon="faLocationDot" />
        </span>
        lat: {{ locator.geo.lat }}, lng: {{ locator.geo.lng }}
      </li>
      <li>
        <span class="icon">
          <FontAwesomeIcon :icon="faTemperatureHalf" />
        </span>
        {{ temperature }}
      </li>
      <li>
        <span class="icon">
          <FontAwesomeIcon :icon="faDroplet" />
        </span>
        {{ humidity }}
      </li>
      <li>
        <span class="icon">
          <FontAwesomeIcon :icon="faWind" />
        </span>
        {{ wind }}
      </li>
    </ul>
  </div>
</template>
