<template>
  <div class="collection-item">
    <Icon class="collection-icon" name="checkmark" />
    <div class="collection-content">
      <div class="collection-title">{{ position.title }}</div>
      <div class="collection-note" v-if="note">
        <Icon name="note" />
        <Markdown :text="note" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import ContentMixin from '@/mixins/ContentMixin'
import Markdown from '@/components/Markdown'

export default {
  mixins: [ContentMixin],

  components: {
    Icon,
    Markdown
  },

  props: {
    note: String,
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
.collection {
  &-item {
    display: flex;

    @include content-item;
    @include heading;
  }

  &-title {
    margin-bottom: 0.6rem;
  }

  &-icon {
    padding-right: $content-padding;
    user-select: none;
  }

  &-content {
    flex: 1;
  }

  &-note {
    @include font-size;

    display: flex;

    p {
      margin: 0;
    }

    .icon {
      margin-right: 0.3em;
    }
  }
}
</style>
