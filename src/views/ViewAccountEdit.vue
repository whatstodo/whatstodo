<template>
  <div class="view view-account-edit">
    <div class="heading">{{ content.heading }}</div>
    <input
      :placeholder="user.name"
      :value="user.name_draft"
      @input="setDraft('name', $event.target.value)"
    />
    <input
      :placeholder="user.website"
      :value="user.website_draft"
      @input="setDraft('website', $event.target.value)"
    />
    <input
      :placeholder="user.email"
      :value="user.email_draft"
      @input="setDraft('email', $event.target.value)"
    />
    <ButtonsBar>
      <template slot="right">
        <a @click="save">{{ content.save_data }}</a>
      </template>
    </ButtonsBar>
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import ButtonsBar from '@/components/ButtonsBar'

export default {
  mixins: [ViewMixin],

  components: {
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
  },

  methods: {
    setDraft(key, value) {
      this.$store.commit('users/setDraft', { id: 'user', key, value })
    },

    async save() {
      await this.$store.dispatch('users/save')

      this.$router.push({
        name: 'Account',
        params: { messageId: 'change_data_successful' }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.view-account-edit {
  input {
    outline: none;
    border: none;
    @include content-item;
  }
}
</style>
