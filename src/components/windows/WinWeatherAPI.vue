<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCloudSun, faTemperatureHalf, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const officialURL = 'https://www.weatherapi.com/'

let location = ref(undefined)
let temperature = ref(0)
let description = ref('')
let searchQuery = ref("")
let weatherData = ref()
let loading = false
let error = false
const APIKey = "e1c9e77de1e744f2a82185901241205"

const getWeather = async () => {
  loading = true;
  error = false;
  console.log(searchQuery.value);
  if (searchQuery.value !== "") {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${searchQuery.value}&lang=ru`)
      const data = await response.json();
      loading = false;
      location = data.location;
      temperature = data.current.temp_c;
      description = data.current.condition.text;
      weatherData = data;
      console.log(weatherData);
    } catch (error) {
      loading = false;
      error = true;
      console.error(error);
    }
  }
  resetSearchQuery()
}

const resetSearchQuery = () => {
  searchQuery.value = "";
}
</script>

<template>
  <div class="box">
    <h2>Weather API</h2>
    <div class="panel-block grid is-column-gap-1 weather-form">
      <input type="text" class="input is-normal weather-form__input" v-model="searchQuery" @keyup.enter="getWeather"
        placeholder="Enter city">
      <button class="button is-primary weather-form__btn" @click="getWeather">Search</button>
    </div>
    <div class="card" v-if="loading">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather API" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Wait for response...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card" v-show="!error && location && temperature !== 0 && description">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather API" />
            </figure>
          </div>
          <div class="media-content">
            <p class="subtitle is-4">Powered by WeatherAPI.com</p>
          </div>
        </div>
      </div>
      <div class="block">
        <FontAwesomeIcon :icon="faLocationDot" />
        {{ location?.name }} ({{ location?.country }})
      </div>
      <div class="media">
        <div class="media-left">
          <FontAwesomeIcon :icon="faTemperatureHalf" />
        </div>
        <div class="media-content">
          {{ temperature }}°C
        </div>
      </div>
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="`https:${weatherData?.current.condition.icon}`"
              :alt="`${weatherData?.current.condition.text}`" />
          </figure>
        </div>
        <div class="media-content">
          <p class="subtitle is-4">{{ weatherData?.current.condition.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.weather {
  background-image: url('../assets/bg.jpg');
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>