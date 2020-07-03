export default {
  proivde() {
    return {
      contentId: this.contentId
    }
  },

  data() {
    return {
      contentId: null,
      messageId: 'hint'
    }
  },

  computed: {
    content() {
      const { contentId } = this
      return (contentId && this.$store.getters['content/get'](contentId)) || {}
    },

    messages() {
      return this.content?.messages || {}
    },

    message() {
      return this.messages[this.messageId]
    }
  },

  created() {
    const { contentId } = this
    contentId && this.$store.dispatch('content/load', contentId)
  },

  methods: {
    showMessage(id) {
      this.messageId = id
    }
  }
}
