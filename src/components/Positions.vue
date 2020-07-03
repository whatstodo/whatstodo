<template>
  <div class="positions">
    <div class="positions-add">
      <div class="positions-icon">+</div>
      <router-link :to="{ name: 'Add' }">{{ content.addPosition }}</router-link>
    </div>
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
import ContentMixin from '@/mixins/ContentMixin'

export default {
  mixins: [ContentMixin],

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
