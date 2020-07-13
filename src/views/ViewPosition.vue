<template>
  <div class="view view-position">
    <div class="heading">{{ position.title }}</div>
    <PositionDetail class="view-position-detail" :position="position">
      <Icon name="share" @click="share" />
      <Icon name="print" />
      <Message v-if="message" :text="message" />
    </PositionDetail>
    <main class="view-position-content">
      <PositonContent :positionId="id" />
      <PositionSigned v-if="position.signedBy.length" :positionId="id" />
      <PositionNotes v-if="position.notes.length" :positionId="id" />
    </main>
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import PositionDetail from '@/components/PositionDetail'
import PositonContent from '@/components/PositionContent'
import PositionSigned from '@/components/PositionSigned'
import PositionNotes from '@/components/PositionNotes'
import Icon from '@/components/Icon'
import Message from '@/components/Message'

export default {
  mixins: [ViewMixin],

  components: {
    Icon,
    PositionDetail,
    PositonContent,
    PositionSigned,
    PositionNotes,
    Message
  },

  props: {
    id: String
  },

  data() {
    return {
      contentId: 'position'
    }
  },

  computed: {
    position() {
      return this.$store.getters['positions/item'](this.id) || {}
    },

    messageData() {
      return {
        id: this.id
      }
    }
  },

  created() {
    this.$store.dispatch('users/load')
    this.$store.dispatch('positions/load')
  },

  methods: {
    share() {
      this.showMessage('share')
    }
  }
}
</script>

<style lang="scss">
.view-position {
  width: 66.66%;
  margin: 0 auto;
  margin-bottom: $large-line-height;

  .message {
    border: none;
    margin-top: 0.7rem;
  }

  ul {
    margin-bottom: $line-height;
    padding-left: 1.6em;
    list-style: none;
  }

  ul li:before {
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    font-family: inherit;
    content: '•';
  }

  .heading {
    @include heading;
    font-weight: 500;
    margin-top: $large-line-height;
    padding-top: 0;
    padding-bottom: 0.625rem;
    text-align: center;
    border: none;
  }

  &-detail {
    text-align: center;
    margin-bottom: 4.6rem;
  }
}
</style>
