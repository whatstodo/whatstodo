<template>
  <div class="positions">
    <div class="positions-add">
      <Icon class="positions-icon" name="add" />
      <router-link class="button" :to="{ name: 'Add' }">{{
        content.addPosition
      }}</router-link>
    </div>
    <PositionsItem
      v-for="item of sorted"
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
import { sortByDate } from '@/utils'
import Icon from '@/components/Icon'
import PositionsItem from './PositionsItem'
import ContentMixin from '@/mixins/ContentMixin'

export default {
  mixins: [ContentMixin],

  components: {
    Icon,
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

  computed: {
    sorted() {
      return sortByDate(this.items)
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
  &-add {
    display: flex;
    @include content-item;
    @include heading;
    .button {
      @include font-size-large;
      font-weight: inherit;
    }
  }
}
</style>
