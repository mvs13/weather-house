<script setup>
import { windowsList } from "./windows-list";
import randomClass from "../common/randomClass";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const props = defineProps({
  params: {
    type: Object,
    default: {
      nWindows: {
        type: Number,
        default: 3,
      },
      nCols: {
        type: Number,
        default: 4,
        validator(value) {
          return value >= 0 && value <= 12;
        },
      },
    },
  },
});
const random = randomClass;
const list = random.uniqueArray(0, windowsList.length, props.params.nWindows);
</script>

<template>
  <div :class="`fixed-grid has-${props.params.nCols}-cols`">
    <div class="grid">
      <div v-for="(ndx, index) in list" :key="index" class="cell">
        <div class="card">
          <div v-if="windowsList[ndx].logo !== ''" class="card-image">
            <img :src="windowsList[ndx].logo" :alt="windowsList[ndx].title" />
          </div>
          <div class="card-header">
            <div class="card-header-title">
              {{ windowsList[ndx].title }}
            </div>
          </div>
          <div class="card-content"></div>
          <div class="card-footer">
            <a :href="windowsList[ndx].officialURL" target="_blank">
              <FontAwesomeIcon :icon="faArrowUpRightFromSquare" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
