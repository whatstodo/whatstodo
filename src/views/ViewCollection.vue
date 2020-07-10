<template>
  <div class="view view-collection">
    <Message v-if="message" :text="message" />
    <Collection />
    <a @click="checkout">{{ content.checkout }}</a>
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import Message from '@/components/Message'
import Collection from '@/components/Collection'

export default {
  mixins: [ViewMixin],

  components: {
    Message,
    Collection
  },

  provide() {
    return {
      contentId: this.contentId
    }
  },

  data() {
    return {
      contentId: 'collection'
    }
  },

  computed: {
    collection() {
      return this.$store.getters['collection/items']
    }
  },

  methods: {
    checkout() {
      this.$store.dispatch('collection/publish')
    }
  }
}
</script>
