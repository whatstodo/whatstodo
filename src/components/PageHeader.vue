<template>
  <header class="page-header">
    <div class="left">
      <router-link :to="{ name: 'Positions' }">Whatstodo.design</router-link>
    </div>
    <div class="right">
      <router-link :to="{ name: 'Search' }">Suche</router-link>
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;

  a:not(:last-child) {
    margin-right: 0.5em;
  }
}
</style>
