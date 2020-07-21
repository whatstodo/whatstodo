<template>
  <Icon class="icon-button" :name="name" v-on="$listeners"><slot /></Icon>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },

  props: {
    name: String
  }
}
</script>

<style lang="scss">
.icon-button {
  cursor: pointer;
}
</style>
