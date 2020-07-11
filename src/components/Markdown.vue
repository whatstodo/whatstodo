<template>
  <component :is="'div'" v-html="html" v-on="$listeners" />
</template>

<script>
import marked from 'marked'
import DOMPurify from 'dompurify'

export default {
  props: {
    text: String
  },

  computed: {
    html() {
      return this.text && DOMPurify.sanitize(marked(this.text))
    }
  }
}
</script>
