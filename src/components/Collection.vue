<template>
  <div class="collection">
    <CollectionItem v-for="item of collection" :key="item.id" :id="item.id" />
  </div>
</template>

<script>
import CollectionItem from '@/components/CollectionItem'

export default {
  components: {
    CollectionItem
  },

  computed: {
    collection() {
      return this.$store.getters['collection/items']
    }
  }
}
</script>
