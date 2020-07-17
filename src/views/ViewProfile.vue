<template>
  <div class="view view-profile">
    <Heading :message="message">{{ heading }}</Heading>
    <ProfileCollection :userId="userId" />
  </div>
</template>

<script>
import { mustache } from '@/utils'
import ViewMixin from '@/mixins/ViewMixin'
import Heading from '@/components/Heading'
import ProfileCollection from '@/components/ProfileCollection'

export default {
  mixins: [ViewMixin],

  components: {
    Heading,
    ProfileCollection
  },

  data() {
    return {
      contentId: 'profile'
    }
  },

  computed: {
    userId() {
      return this.$route.params.userId
    },

    user() {
      return this.$store.getters['users/item'](this.userId) || {}
    },

    heading() {
      return mustache(this.content.heading, { 'user-name': this.user.name })
    },

    messageData() {
      const { name, website } = this.user
      return {
        'user-name': name,
        'user-website-link': `${website}`
      }
    }
  },

  created() {
    this.$store.dispatch('users/load')
    this.$store.dispatch('positions/load')
  }
}
</script>
