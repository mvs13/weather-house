<script>
import { defineComponent } from "vue";
import { doorsList } from "./doors-list";
import { useLocation } from "../../stores/location";
import IPClass from "../common/ipClass";

export default defineComponent({
  data() {
    return {
      location: new IPClass(),
      mapByYandex: undefined,
      locationStore: useLocation(),
    };
  },
  mounted() {
    let yandexMapsScript = document.createElement("script");
    yandexMapsScript.src =
      "https://api-maps.yandex.ru/2.1/?apikey=24ddf161-02e0-45c6-8e35-7f909e7a9143&lang=ru_RU";
    yandexMapsScript.async = false;
    document.body.appendChild(yandexMapsScript);
    yandexMapsScript.onload = () => {
      console.log(`Yandex Maps API loaded`);
      ymaps.ready(this.initYaMap);
    };
  },
  methods: {
    initYaMap() {
      let pos = this.locationStore.geo;
      // console.log(pos, this.locationStore.position);
      this.mapByYandex = new ymaps.Map("map", {
        center: [pos.lat, pos.lng],
        zoom: this.locationStore.zoom,
        controls: ["geolocationControl"],
      });
      this.mapByYandex.events.add("click", this.setNewLocation);
    },
    setNewLocation(e) {
      let coords = e.get("coords");
      // console.log(coords);
      this.mapByYandex.panTo([coords[0], coords[1]]);
      // this.mapByYandex
      //   .setCenter([coords[0], coords[1]], this.locationStore.zoom, {
      //     checkZoomRange: true,
      //   })
      //   .then(
      //     function (result) {
      //       this.mapByYandex.setZoom(this.locationStore.zoom + 1, {
      //         duration: 1000,
      //       });
      //     },
      //     function (error) {
      //       console.log("Set center error", error);
      //     }
      //   );
      this.locationStore.setPosition({ lat: coords[0], lng: coords[1] });
      console.log(this.locationStore.geo);
    },
  },
});
</script>

<template>
  <div id="map" class="map-box"></div>
</template>

<style lang="scss">
.map-box {
  width: 100%;
  max-height: 360px;
  min-height: 240px;
}
</style>
