<script setup>
import WeatherBase from './components/WeatherBase.vue'
let appHeaderOne = "Поговорим о погоде"
let appDescription = "погода на ближайшие дни из различных источников"
</script>

<template>
  <div class="container is-fluid">
    <section class="hero is-small is-primary">
      <div class="hero-body">
        <h1 class="title app-header">{{ appHeaderOne }}</h1>
        <h2 class="subtitle app-subheader">{{ appDescription }}</h2>
      </div>
    </section>
    <WeatherBase />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('./../node_modules/bulma/css/bulma.min.css');
:root {
  --font-headers: 'Tinos', serif;
  --font-base: 'Fira Sans', sans-serif;
}
.app-header {
  font-family: var(--font-headers);
  font-size: 24px;
  }
</style>
