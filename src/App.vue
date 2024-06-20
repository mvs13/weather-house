<script setup>
let appHeaderOne = "Башня наблюдения за погодой"
let appDescription = "Погода на ближайшие дни из различных источников"
</script>

<template>
  <header class="container is-fluid">
    <nav>
      <RouterLink to="/">Weather Base</RouterLink>
      <RouterLink to="/win-list">Weather windows</RouterLink>
    </nav>
    <section class="hero is-small is-primary">
      <div class="hero-body">
        <h1 class="title app-header">{{ appHeaderOne }}</h1>
        <h2 class="subtitle app-subheader">{{ appDescription }}</h2>
      </div>
    </section>
  </header>

  <main class="container is-fluid">
    <RouterView />
  </main>

  <footer class="container is-fluid">
    <p><strong>Текущий путь маршрута:</strong> {{ $route.fullPath }}</p>
    <p><strong>Имя маршрута:</strong> {{ $route.name }}</p>
  </footer>

</template>

<style lang="scss">
:root {
  --font-headers: 'Tinos', serif;
  --font-base: 'Fira Sans', sans-serif;
}
.app-header {
  // font-family: var(--font-headers);
  font-size: 24px;
  }
</style>
