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
  },

  created() {
    this.$store.dispatch('users/load')
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

h1,
h2,
h3,
h4,
h5,
h6 {
  font: inherit;
  margin: 0;
}

ul {
  margin: 0;
}

a {
  color: inherit;
  font: inherit;
}

.button {
  @include button;
}

.heading {
  padding: $content-padding;
  @include font-size-large;
}

input,
textarea {
  @include font-size-medium;
  font-family: G2TGR, 'Sans Serif';
}

button {
  text-decoration: none;
  font-weight: bold;
}

@include font-face('G2TGR', './assets/fonts/TGR REGULAR/G2TGR-Regular', 400);

@include font-face('G2TGR', './assets/fonts/TGR MEDIUM/G2TGR-Medium', 500);

@include font-face('G2TGR', './assets/fonts/TGR BOLD/G2TGR-Bold', 700);

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  font-family: G2TGR, 'Sans Serif';
  @include font-size-medium;

  .view {
    flex: 1;
  }
}
</style>
