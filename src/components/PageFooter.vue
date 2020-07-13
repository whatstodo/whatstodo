<template>
  <footer class="page-footer">
    <ButtonsBar>
      <template slot="left">
        <router-link :to="{ name: 'Info' }">Info</router-link>
        <router-link :to="{ name: 'Howto' }">Howto</router-link>
        <router-link :to="{ name: 'Participants' }">Teilnehmende</router-link>
      </template>
      <template slot="right">
        <router-link :to="{ name: 'Contact' }">Kontakt</router-link>
        <router-link :to="{ name: 'Imprint' }">Impressum</router-link>
      </template>
    </ButtonsBar>
  </footer>
</template>

<script>
import ButtonsBar from '@/components/ButtonsBar'

export default {
  components: {
    ButtonsBar
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  margin-top: 4rem;
}
</style>
