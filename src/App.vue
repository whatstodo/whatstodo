<template>
  <div id="app">
    <PageHeader v-if="!fullPage" />
    <RouterView class="view" />
    <PageFooter v-if="!fullPage" />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'

export default {
  components: {
    PageHeader,
    PageFooter
  },

  computed: {
    fullPage() {
      return this.$route.meta.fullPage
    }
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .view {
    flex: 1;
  }
}
</style>
