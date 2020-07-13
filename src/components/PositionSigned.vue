<template>
  <div class="position-signed">
    <Icon
      class="position-signee"
      name="checkmark"
      v-for="userId of signedBy"
      :key="userId"
      >{{ getUserName(userId) }}</Icon
    >
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },

  props: {
    positionId: String
  },

  computed: {
    position() {
      return this.$store.getters['positions/item'](this.positionId)
    },

    signedBy() {
      return this.position?.signedBy
    }
  },

  methods: {
    getUserName(userId) {
      return this.$store.getters['users/item'](userId)?.name
    }
  }
}
</script>

<style lang="scss" scoped>
.position {
  &-signed {
    padding-top: $line-height * 0.8;
    padding-bottom: $line-height * 0.85;
    margin-bottom: $line-height * 0.85;
    border-top: $line-width solid;
    border-bottom: $line-width solid;
  }

  &-signee:not(:last-child) {
    margin-right: 0.7em;
  }
}
</style>
