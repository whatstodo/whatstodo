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

<style lang="scss">
.message {
  @include content-item;
  @include font-size;
  padding-top: 0;

  p {
    margin: 0;
  }
}
</style>
