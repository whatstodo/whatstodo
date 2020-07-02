<template>
  <footer class="page-footer">
    <div class="left">
      <router-link :to="{ name: 'Info' }">Info</router-link>
      <router-link :to="{ name: 'Howto' }">Howto</router-link>
      <router-link :to="{ name: 'Participants' }">Teilnehmende</router-link>
    </div>
    <div class="right">
      <router-link :to="{ name: 'Contact' }">Kontakt</router-link>
      <router-link :to="{ name: 'Imprint' }">Impressum</router-link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.page-footer {
  display: flex;
  justify-content: space-between;

  a:not(:last-child) {
    margin-right: 0.5em;
  }
}
</style>
