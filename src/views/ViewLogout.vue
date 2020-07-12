<template>
  <div class="view view-logout">
    <div class="heading"></div>
    <Message v-if="message" :text="message" />
    <ButtonsBar />
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
      contentId: 'logout'
    }
  },

  mounted() {
    this.$store.dispatch('logout')
  }
}
</script>
