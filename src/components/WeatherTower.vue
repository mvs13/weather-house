<script setup>
import FloorsCls from "./floors/FloorsCls";
const floors = FloorsCls;
const pageTitle = "Этажи погодной башни";
</script>

<template>
  <div class="columns is-centered">
    <div class="column is-two-thirds has-background-primary-50 floors">
      <!-- <h2 class="title has-background-primary-00">{{ pageTitle }}</h2> -->
      <div v-for="floor in floors.list" :key="floor.id" class="box">
        <h3 class="title has-text-centered has-background-primary-10">
          {{ floor.title }}
        </h3>
        <component :is="floors.coponets[floor.id]" :params="floor.params" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
