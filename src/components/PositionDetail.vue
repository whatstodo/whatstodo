<template>
  <div class="position-detail" v-on="$listeners">
    <Icon name="checkmark">{{ signCount }}</Icon>
    <Icon name="note">{{ noteCount }}</Icon>
    <Icon name="published">{{ dateCreated }}</Icon>
    <Icon name="modified" v-if="dateModified">{{ dateModified }}</Icon>
    <slot />
  </div>
</template>

<script>
import { displayDate } from '@/utils'
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },

  props: {
    position: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    noteCount() {
      return this.position.notes?.length
    },

    signCount() {
      return this.position.signedBy?.length
    },

    dateCreated() {
      return displayDate(this.position.date)
    },

    dateModified() {
      return displayDate(this.position.modified)
    }
  }
}
</script>

<style lang="scss">
.position-detail {
  > *:not(:last-child) {
    margin-right: 0.8em;
  }
}
</style>
