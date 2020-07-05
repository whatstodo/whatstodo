<template>
  <div class="positions-item" :class="{ expanded }">
    <div class="positions-bar">
      <div
        class="positions-icon"
        @click="select()"
        :class="{ enabled: status }"
      >
        O
      </div>
      <div class="positions-heading">
        <div class="positions-title" @click="toggleExpand">
          {{ item.title }}
        </div>
        <div class="positions-detail" @click="toggleExpand">
          <span>{{ signCount }}</span
          >&nbsp;
          <span>{{ noteCount }}</span>
        </div>
      </div>
    </div>
    <div class="positions-preview" v-if="expanded">
      <div>
        <span>{{ signCount }}</span
        >&nbsp;
        <span>{{ noteCount }}</span>
      </div>
      <div class="positions-preview-text" @click="open">
        {{ item.declaration }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => ({}) },
    expanded: Boolean
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
    toggleExpand() {
      if (this.expanded) {
        this.$emit('collapse')
      } else {
        this.$emit('expand')
      }
    },

    select() {
      this.$emit('select', !this.status)
    },

    open() {
      this.$emit('open')
    }
  }
}
</script>

<style lang="scss">
.positions {
  &-item {
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
    display: flex;
  }

  &-heading {
    flex: 1;

    .positions-item:not(.expanded) &:hover {
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

  &-preview {
    &-text {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
