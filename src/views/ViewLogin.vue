<template>
  <div class="view view-login">
    <Heading :message="message">{{ content.heading }}</Heading>
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import Heading from '@/components/Heading'

export default {
  mixins: [ViewMixin],

  components: {
    Heading
  },

  data() {
    return {
      contentId: 'login',
      messageId: 'test_version'
    }
  }
}
</script>
