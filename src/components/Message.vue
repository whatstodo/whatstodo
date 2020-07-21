<template>
  <div class="message">
    <transition name="fade" mode="out-in" :appear="appear">
      <Markdown class="message-content" :text="text" :key="text" />
    </transition>
  </div>
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
  },

  computed: {
    appear() {
      return this.$route.params.messageId !== undefined
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

.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
  transition: opacity 1s;
}
</style>
