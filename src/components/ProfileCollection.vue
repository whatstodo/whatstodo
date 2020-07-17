<template>
  <div class="profile-collection">
    <ProfileCollectionItem
      v-for="(item, positionId) of collection"
      :key="item.id"
      v-bind="item"
      :positionId="positionId"
    />
  </div>
</template>

<script>
import ProfileCollectionItem from '@/components/ProfileCollectionItem'

export default {
  components: {
    ProfileCollectionItem
  },

  props: {
    userId: String
  },

  computed: {
    user() {
      return this.$store.getters['users/item'](this.userId)
    },

    collection() {
      return this.user?.collection || {}
    }
  }
}
</script>
