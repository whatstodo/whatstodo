<template>
  <div class="positions">
    <div class="positions-add">Add</div>
    <PositionsItem
      v-for="item of items"
      :key="item.id"
      :item="item"
      @select="select(item, $event)"
    />
  </div>
</template>

<script>
import PositionsItem from './PositionsItem'

export default {
  components: {
    PositionsItem
  },

  props: {
    items: { type: Array, required: true }
  },

  methods: {
    select({ id }, status) {
      this.$emit('select', { id, status })
    }
  }
}
</script>
