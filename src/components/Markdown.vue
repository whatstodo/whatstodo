<template>
  <component :is="'div'" v-html="html" />
</template>

<script>
import marked from 'marked'

export default {
  props: {
    text: String
  },

  computed: {
    html() {
      return marked(this.text || '')
    }
  }
}
</script>
