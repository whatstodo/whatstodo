<template>
  <div class="view view-collection">
    <Heading :message="message">
      <span>{{ content.heading }}</span>
      <template slot="buttons">
        <IconButton name="share" @click="share()" />
        <IconButton name="print" />
        <IconButton name="close" @click="close()" />
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
import { slugify } from '@/utils'
import IconButton from '@/components/IconButton'
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
    IconButton
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
    },

    user() {
      return this.$store.getters['users/loggedIn']
    },

    messageData() {
      return {
        'user-id': slugify(this.user.name)
      }
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
    },

    share() {
      this.showMessage('share')
    },

    close() {
      this.$router.push({ name: 'Positions' })
    }
  }
}
</script>
