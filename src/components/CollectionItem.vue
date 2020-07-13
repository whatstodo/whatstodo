<template>
  <div class="collection-item">
    <Icon class="collection-icon" name="checkbox-active" />
    <div class="collection-content">
      <div class="collection-title">{{ position.title }}</div>
      <div class="collection-note">
        <Icon name="note" />
        <textarea
          :placeholder="content.add_note"
          :value="note"
          rows="3"
          @input="setDraft('note', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import ContentMixin from '@/mixins/ContentMixin'

export default {
  mixins: [ContentMixin],

  components: {
    Icon
  },

  props: {
    id: { type: String, required: true }
  },

  computed: {
    item() {
      return this.$store.getters['collection/item'](this.id) || {}
    },

    position() {
      return this.item.position || {}
    },

    draft() {
      return this.item.draft || {}
    },

    note() {
      return this.draft.note ?? this.item.note
    }
  },

  mounted() {
    this.setDraft('note', this.item.note)
  },

  methods: {
    setDraft(key, value) {
      this.$store.commit('collection/setDraft', { id: this.id, key, value })
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

    .icon {
      margin-right: 0.3em;
    }

    textarea {
      display: block;
      flex: 1;
      resize: none;
      border: none;
      outline: none;
      background: none;

      &:not(:focus) {
        color: $color-grey;
      }
    }
  }
}
</style>
