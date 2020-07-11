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
      return (contentId && this.$store.getters['content/item'](contentId)) || {}
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

  mounted() {
    const { messageId } = this.$route.params
    messageId && this.showMessage(messageId)
  },

  methods: {
    showMessage(id) {
      this.messageId = id
    }
  }
}
