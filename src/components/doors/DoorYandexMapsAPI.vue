<script
  src="https://api-maps.yandex.ru/2.1/?apikey=24ddf161-02e0-45c6-8e35-7f909e7a9143&lang=ru_RU"
  type="text/javascript"
></script>
<script setup>
import { doorsList } from "./doors-list";
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7,
  });
}
</script>

<template>
  <div id="map" style="width: 600px; height: 400px"></div>
</template>

<style lang="scss"></style>
