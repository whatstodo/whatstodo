export default {
  data() {
    return {
      contentId: null,
      messageId: null
    }
  },

  computed: {
    content() {
      return this.$store.state.content[this.contentId] || {}
    }
  },

  methods: {
    loadContent() {
      const { contentId } = this
      contentId && this.$store('content/load', contentId)
    }
  }
}
