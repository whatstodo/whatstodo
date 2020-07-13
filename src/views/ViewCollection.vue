<template>
  <div class="view view-collection">
    <Heading :message="message">
      <span>{{ content.heading }}</span>
      <template slot="buttons">
        <Icon name="share" />
        <Icon name="print" />
        <Icon name="close" />
      </template>
    </Heading>
    <Collection />
    <ButtonsBar
      ><a slot="right" @click="checkout">{{ content.checkout }}</a></ButtonsBar
    >
    <div class="view-collection-invert" />
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import ViewMixin from '@/mixins/ViewMixin'
import Collection from '@/components/Collection'
import Heading from '@/components/Heading'
import ButtonsBar from '@/components/ButtonsBar'

export default {
  mixins: [ViewMixin],

  components: {
    Collection,
    Heading,
    ButtonsBar,
    Icon
  },

  provide() {
    return {
      contentId: this.contentId
    }
  },

  data() {
    return {
      contentId: 'collection'
    }
  },

  computed: {
    collection() {
      return this.$store.getters['collection/items']
    }
  },

  mounted() {
    if (this.$route.params.sign) {
      this.$store.dispatch('sign')
    }
  },

  methods: {
    async checkout() {
      await this.$store.dispatch('collection/publish')
      this.$router.push({
        name: 'Positions',
        params: { messageId: 'checkout_successful' }
      })
    }
  }
}
</script>
