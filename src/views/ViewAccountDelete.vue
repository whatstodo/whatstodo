<template>
  <div class="view view-delete-account">
    <div class="heading">{{ content.heading }}</div>
    <Message v-if="message" :text="message" />
    <ButtonsBar>
      <template slot="right">
        <a @click="confirm">{{ content.delete_confirm }}</a>
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
      contentId: 'account-delete'
    }
  },

  computed: {
    user() {
      return this.$store.getters['users/loggedIn'] || {}
    }
  },

  created() {
    this.$store.dispatch('users/load')
  },

  methods: {
    async confirm() {
      await this.$store.dispatch('users/deleteAccount')
      this.showMessage('delete_success')
    }
  }
}
</script>
