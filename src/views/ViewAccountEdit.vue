<template>
  <div class="view view-account-edit">
    <Heading class="heading">{{ content.heading }}</Heading>
    <input :value="name" @input="setDraft('name', $event.target.value)" />
    <input :value="website" @input="setDraft('website', $event.target.value)" />
    <input :value="email" @input="setDraft('email', $event.target.value)" />
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
import Heading from '@/components/Heading'

export default {
  mixins: [ViewMixin],

  components: {
    ButtonsBar,
    Heading
  },

  data() {
    return {
      contentId: 'account'
    }
  },

  computed: {
    user() {
      return this.$store.getters['users/loggedIn'] || {}
    },

    draft() {
      return this.user.draft || {}
    },

    name() {
      return this.draft.name ?? this.user.name
    },

    website() {
      return this.draft.website ?? this.user.website
    },

    email() {
      return this.draft.email ?? this.user.email
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
    @include heading;

    &:not(:focus) {
      color: $color-grey;
    }
  }
}
</style>
