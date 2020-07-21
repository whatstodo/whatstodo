<template>
  <div class="view view-not-found">
    <Heading>{{ content.heading }}</Heading>
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
      contentId: 'not-found'
    }
  }
}
</script>
