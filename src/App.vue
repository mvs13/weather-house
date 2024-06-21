<script setup>
let appHeaderOne = "Башня наблюдения за погодой";
let appDescription = "Погода на ближайшие дни из различных источников";
</script>

<template>
  <header class="container is-fluid">
    <nav
      class="navbar columns is-centered"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="column navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <RouterLink to="/win-list" class="navbar-link"
              >Weather windows</RouterLink
            >
            <div class="navbar-dropdown">
              <RouterLink to="/win-list/weather" class="navbar-item"
                >Weather API</RouterLink
              >
              <RouterLink to="/win-list/yandex" class="navbar-item"
                >Yandex API</RouterLink
              >
              <RouterLink to="/win-list/openmeteo" class="navbar-item"
                >Open Meteo API</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth navbar-brand">
        <RouterLink to="/" class="navbar-item">
          <img class="navbar-logo" src="/weather-eye.svg" :alt="appHeaderOne" />
        </RouterLink>
      </div>
      <div class="column navbar-menu">
        <div class="navbar-end"></div>
      </div>
    </nav>
    <section class="hero is-small">
      <div class="columns is-centered">
        <div
          class="hero-body column is-three-quarters has-background-primary-60 content has-text-centered"
        >
          <h1 class="title app-header">{{ appHeaderOne }}</h1>
          <h2 class="subtitle app-subheader">{{ appDescription }}</h2>
        </div>
      </div>
    </section>
  </header>

  <main class="container is-fluid">
    <RouterView />
  </main>

  <footer class="footer has-background-success">
    <div class="content has-text-centered">
      <p><strong>Текущий путь маршрута:</strong> {{ $route.fullPath }}</p>
      <p><strong>Имя маршрута:</strong> {{ $route.name }}</p>
    </div>
  </footer>
</template>

<style lang="scss">
:root {
}
.app-header {
  // font-family: var(--font-headers);
  font-size: 24px;
}
.footer {
  // background-color: ;
}
</style>
