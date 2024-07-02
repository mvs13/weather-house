<script setup>
import FloorsCls from "./floors/FloorsCls";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowUpRightFromSquare,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
const floors = FloorsCls;
const pageTitle = "Этажи погодной башни";
</script>

<template>
  <div class="columns is-centered">
    <div class="column is-two-thirds has-background-primary-50 floors">
      <!-- <h2 class="title has-background-primary-00">{{ pageTitle }}</h2> -->
      <div v-for="floor in floors.list" :key="floor.id" class="box">
        <h3
          v-if="floor.isUnderConstruction"
          class="box title is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-space-between has-background-primary-80"
        >
          <div class="has-text-10">
            {{ floor.title }}
          </div>
          <div class="has-text-warning has-background-primary-20">
            <FontAwesomeIcon :icon="faPencilRuler" />
          </div>
        </h3>
        <h3 v-else class="title has-text-centered has-background-primary-10">
          {{ floor.title }}
        </h3>
        <component :is="floors.coponets[floor.id]" :params="floor.params" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
