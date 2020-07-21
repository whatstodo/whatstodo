<template>
  <div class="positions-item" :class="{ expanded }">
    <div class="positions-icon" @click="select()">
      <Icon
        :name="icon"
        @mouseenter="checkboxHovered = true"
        @mouseleave="checkboxHovered = false"
      />
    </div>
    <div class="positions-content">
      <div
        class="positions-bar"
        @mouseenter="hover(true)"
        @mouseleave="hover(false)"
      >
        <div class="positions-title" v-show="expanded || !hovered">
          {{ item.title }}
        </div>
        <PositionDetail
          class="positions-detail"
          v-show="expanded || hovered"
          @click="expand"
          :position="item"
        />
      </div>
      <div class="positions-preview" v-if="expanded" @click="open">
        <Markdown class="positions-preview-text" :text="item.declaration" />
        <span class="positions-preview-more">→ weiter lesen</span>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
import Icon from '@/components/Icon'
import PositionDetail from '@/components/PositionDetail'

export default {
  components: {
    Markdown,
    Icon,
    PositionDetail
  },

  props: {
    item: { type: Object, default: () => ({}) },
    expanded: Boolean
  },

  data() {
    return {
      hovered: false,
      checkboxHovered: false
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

    icon() {
      return this.status
        ? 'checkbox-active'
        : this.checkboxHovered
        ? 'checkbox-hover'
        : 'checkbox'
    }
  },

  methods: {
    toggleExpand() {
      if (this.expanded) {
        this.collapse()
      } else {
        this.expand()
      }
    },

    expand() {
      this.$emit('expand')
    },

    collapse() {
      this.$emit('collapse')
    },

    hover(value) {
      this.hovered = value
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
    @include heading;

    &.expanded {
      .positions-detail {
        cursor: default;
        @include font-size;
        margin: 1em 0;
      }
    }
  }

  &-icon {
    padding-right: $content-padding;
    cursor: pointer;
    user-select: none;
  }

  &-content {
    flex: 1;
  }

  &-title {
    cursor: default;
  }

  &-detail {
    cursor: pointer;
  }

  &-preview {
    @include font-size;
    cursor: pointer;

    &-text {
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
}
</style>
