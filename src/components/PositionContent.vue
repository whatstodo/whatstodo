<template>
  <div class="position-content">
    <h1>Deklaration</h1>
    <Markdown :text="position.declaration" />
    <h1>Umsetzung</h1>
    <Markdown :text="position.implementation" />
    <h1>Referenzen</h1>
    <Markdown :text="position.references" />
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'

export default {
  components: {
    Markdown
  },

  props: {
    positionId: String
  },

  computed: {
    position() {
      return this.$store.getters['positions/item'](this.positionId) || {}
    }
  }
}
</script>

<style lang="scss">
.position-content {
  h1 {
    font-weight: 500;
    margin-top: $line-height;
    margin-bottom: 0;
  }

  p {
    margin: 0;
  }
}
</style>
