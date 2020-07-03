export default {
  inject: ['contentId'],

  computed: {
    content() {
      const contentId = this.contentId
      return (contentId && this.$store.getters['content/get'](contentId)) || {}
    }
  }
}
