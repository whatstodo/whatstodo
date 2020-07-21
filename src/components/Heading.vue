<template>
  <div class="heading">
    <div class="heading-wrap">
      <slot />
      <div class="heading-buttons"><slot name="buttons" /></div>
    </div>
    <Message :text="message" />
  </div>
</template>

<script>
import Message from '@/components/Message'

export default {
  props: {
    message: String
  },

  components: {
    Message
  }
}
</script>

<style lang="scss">
.heading {
  &-wrap {
    display: flex;
    justify-content: space-between;
    @include heading;
  }

  .message {
    margin-top: -1rem;
    border: none;
  }

  &-buttons {
    > *:not(:last-child) {
      margin-right: 0.6em;
    }
  }

  border-bottom: $line-width solid $color;
}
</style>
