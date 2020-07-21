<template>
  <div class="view view-positions">
    <Message :text="message" v-if="message" />
    <Positions
      :items="positions"
      @select="selectPosition"
      @open="openPosition"
    />
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
      contentId: 'positions'
    }
  },

  computed: {
    positions() {
      return this.$store.getters['positions/withStatus'] || []
    }
  },

  created() {
    this.$store.dispatch('users/load')
    this.$store.dispatch('positions/load')
  },

  methods: {
    selectPosition({ id, status }) {
      this.$store.commit('selection/setItem', { id, status })
    },

    openPosition(id) {
      this.$router.push({ name: 'Position', params: { id } })
    },

    async sign() {
      if (
        this.$store.getters['collection/isEmpty'] &&
        this.$store.getters['selection/isEmpty']
      ) {
        this.showMessage('select_position')
      } else {
        this.$router.push({
          name: 'Collection',
          params: { sign: true }
        })
      }
    }
  }
}
</script>

<style lang="scss">
.view-positions {
  .message {
    margin-top: $line-height * 0.7;
  }
}
</style>
