<template>
  <div class="view view-delete-account">
    <Heading>{{ content.heading }}</Heading>
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
import Heading from '@/components/Heading'
import ButtonsBar from '@/components/ButtonsBar'

export default {
  mixins: [ViewMixin],

  components: {
    Heading,
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
