<template>
  <div class="position-signed">
    <span v-for="userId of signedBy" :key="userId">{{
      getUserName(userId)
    }}</span>
  </div>
</template>

<script>
export default {
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
      return this.$store.getters['users/get'](userId)?.name
    }
  }
}
</script>
