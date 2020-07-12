<template>
  <div class="view view-login">
    <div class="heading">{{ content.heading }}</div>
    <Message v-if="message" :text="message" />
    <input placeholder="Email" />
    <input placeholder="Passwort" />
    <ButtonsBar>
      <template slot="left">
        <RouterLink :to="{ name: 'Delete Account' }">{{
          content.new_account
        }}</RouterLink>
        <RouterLink :to="{ name: 'Edit Account' }">{{
          content.new_password
        }}</RouterLink>
      </template>
      <template slot="right">
        <RouterLink :to="{ name: 'Positions' }">{{ content.login }}</RouterLink>
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
      contentId: 'login'
    }
  },

  mounted() {
    if (this.$route.meta.permissionHint) {
      this.showMessage('login_required')
    }
  }
}
</script>

<style lang="scss" scoped>
.view-login {
  input {
    outline: 0;
    border: 0;
    @include content-item;
  }
}
</style>
