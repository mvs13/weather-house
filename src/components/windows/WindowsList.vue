<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})
</script>

<template>
  <h2>Windows List</h2>
  <nav class="panel">
    <p class="panel-heading">Available API</p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Search" v-model.trim="search">
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <p class="panel-tabs">
      <a :class="{ 'is-active': $route.name === 'windows' }" @click="$router.push({ name: 'windows' })">Weather API</a>
      <RouterLink to="/win-list/weather">Weather API</RouterLink>
      <RouterLink to="/win-list/yandex">Yandex API</RouterLink>
    </p>
  </nav>

</template>