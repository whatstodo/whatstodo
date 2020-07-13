<template>
  <div class="position-notes">
    <h1>Notizen</h1>
    <div class="position-note" v-for="note of notesSorted" :key="note.id">
      <div>
        <Icon name="note">{{ getUserName(note.userId) }}</Icon
        >, {{ displayDate(note.date) }}
      </div>
      <Markdown :text="note.note" />
    </div>
  </div>
</template>

<script>
import { displayDate, sortByDate } from '@/utils'
import Markdown from '@/components/Markdown'
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
    Markdown
  },
  props: {
    positionId: String
  },

  computed: {
    position() {
      return this.$store.getters['positions/item'](this.positionId)
    },

    notesSorted() {
      return sortByDate(this.position?.notes || [])
    }
  },

  methods: {
    getUserName(userId) {
      return this.$store.getters['users/item'](userId)?.name
    },

    displayDate
  }
}
</script>

<style lang="scss">
.position {
  &-notes {
    margin-top: $line-height;
  }

  &-note {
    p {
      margin: 0;
    }
    margin-bottom: $line-height;
  }
}
</style>
