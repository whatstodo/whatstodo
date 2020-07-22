<template>
  <div id="app" :class="{ invert }">
    <PageHeader v-if="!fullPage" />
    <RouterView class="view" :key="$route.path" />
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
    },

    invert() {
      return this.$route.meta.invert
    }
  },

  created() {
    this.$store.dispatch('users/load')
  }
}
</script>

<style lang="scss">
html {
  @include font-size;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  color: $color;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font: inherit;
  font-weight: 500;
  margin: 0;
}

ul {
  margin: 0;
}

a {
  color: inherit;
  font: inherit;
}

// a:hover,
// .icon-button:hover {
//   text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
// }

.button {
  @include button;
}

input,
textarea {
  @include font-size;
  font-family: G2TGR, 'Sans Serif';
}

button {
  text-decoration: none;
  font-weight: bold;
}

@include font-face('G2TGR', './assets/fonts/TGR REGULAR/G2TGR-Regular', 400);
@include font-face('G2TGR', './assets/fonts/TGR MEDIUM/G2TGR-Medium', 500);
@include font-face('G2TGR-Icons', './assets/fonts/TGR ICONS/G2TGR-Icons');

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: G2TGR, 'Sans Serif';

  .view {
    flex: 1;

    > .heading .heading-wrap {
      font-weight: 500;
    }
  }

  &.invert {
    background: $color;

    .page-header .buttons-bar {
      background: linear-gradient($color 80%, transparent);
    }

    * {
      color: white;
    }
  }
}
</style>
