<template>
  <div class="view view-position">
    <div class="heading">{{ id }}</div>
    <main class="view-position-content">
      <PositonContent :positionId="id" />
      <PositionSigned :positionId="id" />
      <PositionNotes :positionId="id" />
    </main>
  </div>
</template>

<script>
import PositonContent from '@/components/PositionContent'
import PositionSigned from '@/components/PositionSigned'
import PositionNotes from '@/components/PositionNotes'

export default {
  components: {
    PositonContent,
    PositionSigned,
    PositionNotes
  },

  props: {
    id: String
  },

  computed: {
    position() {
      return this.$store.getters['positions/item'](this.id) || {}
    }
  },

  created() {
    this.$store.dispatch('users/load')
    this.$store.dispatch('positions/load')
  }
}
</script>

<style lang="scss">
.view-position {
  &-content > * {
    &:not(:last-child) {
      border-bottom: $line-width solid;
    }
    padding: $line-height 0;
  }
}
</style>
