<template>
  <div class="collection-item">
    <div class="collection-item-title">{{ position.title }}</div>
    <textarea
      :placeholder="content.add_note"
      :value="note"
      @input="setDraft('note', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
import ContentMixin from '@/mixins/ContentMixin'

export default {
  mixins: [ContentMixin],

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
