import { mustache } from '@/utils'

export default {
  provide() {
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
      const { messageData } = this
      const message = this.messages[this.messageId]
      return message && (messageData ? mustache(message, messageData) : message)
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
