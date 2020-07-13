<template>
  <header class="page-header">
    <ButtonsBar>
      <template slot="left">
        <router-link :to="{ name: 'Positions' }">Whatstodo.design</router-link>
      </template>
      <template slot="right">
        <router-link :to="{ name: 'Search' }">Suche</router-link>
        <router-link v-if="isLoggedIn" :to="{ name: 'Account' }">{{
          userName
        }}</router-link>
        <router-link v-else :to="{ name: 'Login' }">Login</router-link>
      </template>
    </ButtonsBar>
  </header>
</template>

<script>
import ButtonsBar from '@/components/ButtonsBar'

export default {
  components: {
    ButtonsBar
  },

  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },

    userName() {
      return this.isLoggedIn && this.$store.getters['users/loggedIn']?.name
    }
  }
}
</script>

<style lang="scss">
.page-header {
  position: sticky;
  top: 0;
  .buttons-bar {
    background: linear-gradient(white 80%, transparent);
    margin-bottom: -1.3em;
  }
}
</style>
