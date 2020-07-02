<template>
  <div class="view view-positions">
    <Message :text="message" />
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import Message from '@/components/Message'

export default {
  mixins: [ViewMixin],

  components: {
    Message
  },

  data() {
    return {
      contentId: 'positions',
      message: 'Hallo'
    }
  }
}
</script>
