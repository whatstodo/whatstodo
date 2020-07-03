export default {
  proivde() {
    return {
      contentId: this.contentId
    }
  },

  data() {
    return {
      contentId: null,
      messageId: null
    }
  },

  computed: {
    content() {
      const { contentId } = this
      return (contentId && this.$store.getters['content/get'](contentId)) || {}
    }
  },

  created() {
    const { contentId } = this
    contentId && this.$store.dispatch('content/load', contentId)
  }
}
