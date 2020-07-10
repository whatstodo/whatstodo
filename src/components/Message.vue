<template>
  <Markdown class="message" :text="text" />
</template>

<script>
import Markdown from '@/components/Markdown'

export default {
  components: {
    Markdown
  },

  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  @include content-item;
}
</style>
