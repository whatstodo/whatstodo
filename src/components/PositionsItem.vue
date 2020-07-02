<template>
  <div class="positions-item">
    <div class="positions-icon" @click="select()" :class="{ enabled: status }">
      O
    </div>
    <div class="positions-bar" @click="expand()">
      <div class="positions-title">{{ item.title }}</div>
      <div class="positions-detail">
        <span>{{ signCount }}</span>
        <span>{{ noteCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => ({}) }
  },

  computed: {
    signed() {
      return this.item.signed
    },

    selected() {
      return this.item.selected
    },

    status() {
      return this.selected ?? this.signed
    },

    noteCount() {
      return this.item.notes?.length
    },

    signCount() {
      return this.item.signedBy?.length
    }
  },

  methods: {
    expand() {},

    select() {
      this.$emit('select', !this.status)
    }
  }
}
</script>

<style lang="scss">
.positions {
  &-item {
    display: flex;
    @include content-item;
  }

  &-icon {
    margin-right: 0.5em;
    cursor: pointer;
    user-select: none;
    &.enabled {
      color: red;
    }
  }

  &-bar {
    flex: 1;

    &:hover {
      color: red;

      .positions-title {
        display: none;
      }

      .positions-detail {
        display: block;
      }
    }
  }

  &-detail {
    display: none;
  }
}
</style>
