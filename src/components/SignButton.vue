<template>
  <div
    class="sign-button"
    :class="{ 'bubble-hovered': bubbleHovered }"
    v-on="$listeners"
  >
    <div ref="wrapper" />
  </div>
</template>

<script>
import { animate } from '@/utils'
import { interpolate } from 'polymorph-js'

const context = require.context(
  '!!svg-inline-loader?idPrefix!@/assets/bubbles',
  false,
  /\.svg$/
)

const bubbles = context.keys().map(key => context(key))

export default {
  data() {
    return {
      bubbles,
      duration: 230, // ms
      bubbleHovered: false
    }
  },

  computed: {
    count() {
      return this.$store.getters['positions/withStatus'].filter(
        ({ signed, selected }) => selected ?? signed
      ).length
    },

    bubbleIndex() {
      return Math.min(this.count, this.bubbles.length - 1)
    }
  },

  watch: {
    bubbleIndex() {
      this.nextBubble()
    }
  },

  created() {
    this.listeners = {
      bubbleEnter: () => this.handleBubbleEnter(),
      bubbleLeave: event => this.handleBubbleLeave(event)
    }
  },

  mounted() {
    const { wrapper } = this.$refs
    wrapper.innerHTML = this.bubbles[this.bubbleIndex]
    this.path = wrapper.querySelector('svg > path')
    this.addBubbleListeners(this.path)
  },

  methods: {
    async nextBubble() {
      const prevPath = this.path
      this.removeBubbleListeners(prevPath)

      const { wrapper } = this.$refs
      wrapper.innerHTML = this.bubbles[this.bubbleIndex]

      const path = (this.path = wrapper.querySelector('svg > path'))
      this.addBubbleListeners(path)

      const interpolator = interpolate([prevPath, path], {
        origin: { x: '50%', y: '50%' },
        optimize: 'fill',
        precision: 2
      })

      animate(
        progress => path.setAttribute('d', interpolator(progress)),
        this.duration
      )
    },

    addBubbleListeners(bubblePath) {
      bubblePath.addEventListener('mouseenter', this.listeners.bubbleEnter)
      bubblePath.addEventListener('mouseleave', this.listeners.bubbleLeave)
    },

    removeBubbleListeners(bubblePath) {
      bubblePath.removeEventListener('mouseenter', this.listeners.bubbleEnter)
      bubblePath.removeEventListener('mouseleave', this.listeners.bubbleLeave)
    },

    handleBubbleEnter() {
      this.bubbleHovered = true
    },

    handleBubbleLeave(event) {
      var el = event.toElement || event.relatedTarget
      // Prevent text (path) elements from triggering mouseleave.
      if (el.tagName !== 'path') {
        this.bubbleHovered = false
      }
    }
  }
}
</script>

<style lang="scss">
.sign-button {
  position: fixed;
  right: 0;
  bottom: 0;

  width: 300px;

  svg {
    > path {
      fill: white;
    }
    g[id$='text'] {
      display: none;

      path {
        fill: white;
      }
    }
  }

  &.bubble-hovered {
    svg > path {
      fill: $color;
    }

    g[id$='text'] {
      display: block;
    }
  }
}
</style>
