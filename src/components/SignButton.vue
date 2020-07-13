<template>
  <div class="sign-button" @click="$emit('click')">
    <div ref="wrapper" />
  </div>
</template>

<script>
import { random, animate } from '@/utils'
import bus from '@/bus'
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
      bubbleIndex: 0
    }
  },

  mounted() {
    const { wrapper } = this.$refs
    wrapper.innerHTML = this.bubbles[this.bubbleIndex]
    this.path = wrapper.querySelector('svg path')
    bus.$on('select-position', () => this.nextBubble())
  },

  methods: {
    async nextBubble() {
      const prevPath = this.path

      let newIndex
      do {
        newIndex = random(0, this.bubbles.length)
      } while (newIndex === this.bubbleIndex)
      this.bubbleIndex = newIndex

      const { wrapper } = this.$refs
      wrapper.innerHTML = this.bubbles[this.bubbleIndex]
      const path = (this.path = wrapper.querySelector('svg path'))

      const interpolator = interpolate([prevPath, path], {
        origin: { x: '50%', y: '50%' },
        optimize: 'fill',
        precision: 2
      })

      animate(progress => path.setAttribute('d', interpolator(progress)), 400)
    }
  }
}
</script>

<style lang="scss">
.sign-button {
  position: fixed;
  right: 0;
  top: 20%;

  width: 300px;

  svg {
    path {
      fill: white;
    }

    text {
      display: none;
      color: $color;
      font-family: G2TGR;
    }
  }

  &:hover {
    svg {
      path {
        fill: $color;
      }

      text {
        display: block;
      }
    }
  }
}
</style>
