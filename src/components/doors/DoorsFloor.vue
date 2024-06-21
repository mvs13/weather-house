<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
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
</script>

<template>
  <h3>{{ title }} - <FontAwesomeIcon :icon="faPersonDigging" /></h3>
</template>

<style lang="scss"></style>
