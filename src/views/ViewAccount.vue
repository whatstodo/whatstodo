<template>
  <div class="view view-account">
    <Message v-if="message" :text="message" />
    <div class="heading">{{ content.heading }}</div>
    <div class="view-account-data">{{ user.name }}</div>
    <div class="view-account-data">{{ user.website }}</div>
    <div class="view-account-data">{{ user.email }}</div>
    <ButtonsBar>
      <template slot="left">
        <RouterLink :to="{ name: 'Delete Account' }">{{
          content.delete_profile
        }}</RouterLink>
        <RouterLink :to="{ name: 'Edit Account' }">{{
          content.change_data
        }}</RouterLink>
      </template>
      <template slot="right">
        <RouterLink :to="{ name: 'Positions' }">{{
          content.logout
        }}</RouterLink>
      </template>
    </ButtonsBar>
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import Message from '@/components/Message'
import ButtonsBar from '@/components/ButtonsBar'

export default {
  mixins: [ViewMixin],

  components: {
    Message,
    ButtonsBar
  },

  data() {
    return {
      contentId: 'account'
    }
  },

  computed: {
    user() {
      return this.$store.getters['users/loggedIn'] || {}
    }
  },

  created() {
    this.$store.dispatch('users/load')
  }
}
</script>
