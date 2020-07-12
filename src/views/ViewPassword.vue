<template>
  <div class="view view-account">
    <Message v-if="message" :text="message" />
    <div class="heading">{{ content.heading }}</div>
    <ButtonsBar>
      <template slot="right">
        <RouterLink
          :to="{ name: 'Login', params: { messageId: 'new_password' } }"
          >{{ content.new_password }}</RouterLink
        >
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
      contentId: 'password'
    }
  }
}
</script>
