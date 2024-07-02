<script setup>
import { doorsList } from "./doors-list";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPersonDigging,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import IPClass from "../common/ipClass";
const title = "Этаж дверей";
const props = defineProps({
  params: {
    type: Object,
    default: {
      nDoors: {
        type: Number,
        default: 3,
      },
    },
  },
});
const location = new IPClass();
</script>

<template>
  <div :class="`fixed-grid has-${props.params.nCols}-cols`">
    <div class="grid">
      <div v-for="door in doorsList" :key="door.id" class="cell">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">
              {{ door.title }}
            </div>
          </div>
          <div class="card-content">
            <component :is="door.component" />
          </div>
          <div class="card-footer">
            <a
              :href="door.officialURL"
              target="_blank"
              class="card-footer-item"
            >
              <span class="icon">
                <FontAwesomeIcon :icon="faArrowUpRightFromSquare" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
