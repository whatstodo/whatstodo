<template>
  <component class="markdown" :is="'div'" v-html="html" v-on="$listeners" />
</template>

<script>
import marked from 'marked'
import DOMPurify from 'dompurify'

const renderer = new marked.Renderer()
renderer.link = function(...args) {
  const href = args[0]
  const link = marked.Renderer.prototype.link.apply(this, args)
  return href.indexOf('http://') === 0 || href.indexOf('https://') === 0
    ? link.replace('<a', '<a target="blank"')
    : link
}

export default {
  props: {
    text: String
  },

  computed: {
    html() {
      return (
        this.text &&
        DOMPurify.sanitize(marked(this.text, { renderer }), {
          ADD_ATTR: ['target']
        })
      )
    }
  }
}
</script>

<style scoped>
.markdown {
  word-break: break-word;
}
</style>
