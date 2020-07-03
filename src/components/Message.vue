<template>
  <div class="message" v-html="text"></div>
</template>

<script>
export default {
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
