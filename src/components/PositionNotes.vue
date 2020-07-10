<template>
  <div class="position-notes">
    <div class="position-note" v-for="note of notes" :key="note.id">
      <div>* {{ getUserName(note.userId) }}, {{ note.date }}</div>
      <Markdown :text="note.note" />
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'

export default {
  components: {
    Markdown
  },

  props: {
    positionId: String
  },

  computed: {
    position() {
      return this.$store.getters['positions/item'](this.positionId)
    },

    notes() {
      return this.position?.notes
    }
  },

  methods: {
    getUserName(userId) {
      return this.$store.getters['users/get'](userId)?.name
    }
  }
}
</script>

<style lang="scss">
.position-notes {
  p {
    margin: 0;
  }
}
</style>
