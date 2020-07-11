<template>
  <div class="collection-item">
    <div class="collection-item-title">{{ position.title }}</div>
    <textarea :placeholder="content.add_note" v-model="noteDraft"></textarea>
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

    noteDraft: {
      get() {
        return this.item.draft
      },

      set(value) {
        this.updateDraft(value)
      }
    }
  },

  mounted() {
    this.updateDraft(this.item.note)
  },

  methods: {
    updateDraft(value) {
      this.$store.commit('collection/setProp', {
        id: this.id,
        key: 'draft',
        value
      })
    }
  }
}
</script>
