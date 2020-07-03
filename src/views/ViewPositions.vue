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

  provide() {
    return {
      contentId: this.contentId
    }
  },

  components: {
    Message,
    Positions,
    SignButton
  },

  data() {
    return {
      contentId: 'positions',
      message: null
    }
  },

  computed: {
    positions() {
      return this.$store.getters['positions/withStatus'] || []
    }
  },

  created() {
    console.log('created')
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
