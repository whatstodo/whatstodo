<template>
  <div class="positions">
    <div class="positions-add">
      <div class="positions-icon">+</div>
      <router-link class="button" :to="{ name: 'Add' }">{{
        content.addPosition
      }}</router-link>
    </div>
    <PositionsItem
      v-for="item of items"
      :key="item.id"
      :item="item"
      :expanded="expandedItem === item"
      @select="select(item, $event)"
      @open="open(item)"
      @expand="expandedItem = item"
      @collapse="expandedItem = null"
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

  data() {
    return {
      expandedItem: null
    }
  },

  methods: {
    select({ id }, status) {
      this.$emit('select', { id, status })
    },

    open({ id }) {
      this.$emit('open', id)
    }
  }
}
</script>

<style lang="scss">
.positions {
  @include font-size-large;
  &-add {
    display: flex;
    @include content-item;
    .button {
      @include font-size-large;
      font-weight: inherit;
    }
  }
}
</style>
