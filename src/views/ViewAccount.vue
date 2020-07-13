<template>
  <div class="view view-account">
    <Heading :message="message">{{ content.heading }}</Heading>
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
        <RouterLink :to="{ name: 'Logout' }">{{ content.logout }}</RouterLink>
      </template>
    </ButtonsBar>
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import ButtonsBar from '@/components/ButtonsBar'
import Heading from '@/components/Heading'

export default {
  mixins: [ViewMixin],

  components: {
    Heading,
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

<style lang="scss" scoped>
.view-account {
  &-data {
    @include content-item;
    @include heading;
  }
}
</style>
