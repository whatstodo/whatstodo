<template>
  <div class="view view-positions">
    <Message v-if="message" :text="message" />
    <Positions :items="positions" @select="selectPosition" />
    <SignButton @click="sign" />
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import Message from '@/components/Message'
import Positions from '@/components/Positions'
import SignButton from '@/components/SignButton'

export default {
  mixins: [ViewMixin],

  components: {
    Message,
    Positions,
    SignButton
  },

  computed: {
    positions() {
      return this.$store.getters['positions/withStatus'] || []
    }
  },

  data() {
    return {
      contentId: 'positions',
      message: null
    }
  },

  created() {
    this.$store.dispatch('users/load')
    this.$store.dispatch('positions/load')
  },

  methods: {
    selectPosition({ id, status }) {
      this.$store.dispatch('selection/set', { id, status })
    },

    sign() {
      this.$store.dispatch('sign')
    }
  }
}
</script>
