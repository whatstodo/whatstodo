<template>
  <span class="icon" v-on="$listeners">
    <span class="icon-character">{{ character }}</span>
    <span class="icon-slot" v-if="hasSlot"><slot /></span>
  </span>
</template>

<script>
export default {
  props: {
    name: String
  },

  data() {
    return {
      icons: {
        checkbox: 'A',
        'checkbox-hover': 'B',
        'checkbox-active': 'C',
        checkmark: 'D',
        note: 'E',
        published: 'F',
        modified: 'G',
        share: 'I',
        print: 'J',
        close: 'K',
        add: 'L'
      }
    }
  },

  computed: {
    character() {
      return this.icons[this.name]
    },

    hasSlot() {
      return !!this.$slots.default
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  cursor: default;

  &-character {
    font-family: G2TGR-Icons;
  }

  &-slot {
    padding-left: 0.1em;
  }
}
</style>
