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
        <div
          class="positions-title"
          v-show="expanded || !hovered"
          @click="toggleExpand"
        >
          {{ item.title }}
        </div>
        <PositionDetail
          class="positions-detail"
          v-show="expanded || hovered"
          @click="toggleExpand"
          :position="item"
        />
        <!-- <div
          class="positions-detail"
          v-show="expanded || hovered"
          @click="toggleExpand"
        >
          <Icon name="checkmark">{{ signCount }}</Icon>
          <Icon name="notes">{{ noteCount }}</Icon>
          <Icon name="published">{{ dateCreated }}</Icon>
          <Icon name="modified" v-if="dateModified">{{ dateModified }}</Icon>
        </div> -->
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
        this.$emit('collapse')
      } else {
        this.$emit('expand')
      }
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
    cursor: pointer;
  }

  &-preview {
    @include font-size;

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
