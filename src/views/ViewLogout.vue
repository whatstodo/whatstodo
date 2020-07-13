<template>
  <div class="view view-logout">
    <Heading :message="message" class="heading"></Heading>
    <ButtonsBar />
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
      contentId: 'logout'
    }
  },

  mounted() {
    this.$store.dispatch('logout')
  }
}
</script>
