<template>
  <div class="positions-item" :class="{ expanded }">
    <div class="positions-icon" @click="select()" :class="{ enabled: status }">
      O
    </div>
    <div class="positions-content">
      <div
        class="positions-bar"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      >
        <div
          class="positions-title"
          v-show="expanded || !hovered"
          @click="toggleExpand"
        >
          {{ item.title }}
        </div>
        <div
          class="positions-detail"
          v-show="expanded || hovered"
          @click="toggleExpand"
        >
          <span>{{ signCount }}</span>
          <span>{{ noteCount }}</span>
          <span>{{ dateCreated }}</span>
          <span>{{ dateModified }}</span>
        </div>
      </div>
      <Markdown
        class="positions-preview"
        v-if="expanded"
        :text="item.declaration"
        @click="open"
      />
    </div>
  </div>
</template>

<script>
import { displayDate } from '@/utils'
import Markdown from '@/components/Markdown'

export default {
  components: {
    Markdown
  },

  props: {
    item: { type: Object, default: () => ({}) },
    expanded: Boolean
  },

  data() {
    return {
      hovered: false
    }
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
    },

    dateCreated() {
      return displayDate(this.item.date)
    },

    dateModified() {
      return displayDate(this.item.modified)
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
    display: flex;

    @include content-item;

    &.expanded {
      .positions-detail {
        cursor: default;
        @include font-size-medium;
      }
    }
  }

  &-icon {
    margin-right: 0.5em;
    cursor: pointer;
    user-select: none;
    &.enabled {
      color: red;
    }
  }

  &-content {
    flex: 1;
  }

  &-title {
    cursor: pointer;
    width: 100%;
  }

  &-detail {
    cursor: pointer;

    > *:not(:last-child) {
      margin-right: 0.4em;
    }
  }

  &-preview {
    @include font-size-medium;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    // Remove margin and only display the first child, otherwise line-clamp
    // wont work correctly.
    p {
      margin: 0;
    }

    *:not(:first-child) {
      display: none;
    }
  }
}
</style>
