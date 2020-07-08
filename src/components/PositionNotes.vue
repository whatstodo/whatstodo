<template>
  <div class="position-notes">
    <div class="position-note" v-for="note of notes" :key="note.id">
      <div>* {{ getUserName(note.userId) }}, {{ note.date }}</div>
      <div>{{ note.note }}</div>
    </div>
  </div>
</template>

<script>
export default {
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
