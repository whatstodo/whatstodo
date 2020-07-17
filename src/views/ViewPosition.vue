<template>
  <div class="view view-position">
    <div class="heading">{{ position.title }}</div>
    <IconButton class="view-position-close" name="close" @click="close" />
    <PositionDetail class="view-position-detail" :position="position">
      <IconButton name="share" @click="share" />
      <IconButton name="print" />
      <Message v-if="message" :text="message" />
    </PositionDetail>
    <main class="view-position-content">
      <PositionContent :positionId="id" />
      <PositionSigned v-if="position.signedBy.length" :positionId="id" />
      <PositionNotes v-if="position.notes.length" :positionId="id" />
    </main>
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import PositionDetail from '@/components/PositionDetail'
import PositionContent from '@/components/PositionContent'
import PositionSigned from '@/components/PositionSigned'
import PositionNotes from '@/components/PositionNotes'
import IconButton from '@/components/IconButton'
import Message from '@/components/Message'

export default {
  mixins: [ViewMixin],

  components: {
    IconButton,
    PositionDetail,
    PositionContent,
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
    },

    close() {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push({ name: 'Positions' })
      }
    }
  }
}
</script>

<style lang="scss">
.view-position {
  width: 66.66%;
  margin: 0 auto;
  margin-bottom: $large-line-height;

  &-close {
    @include font-size-large;
    padding-right: $content-padding;
    padding-top: $content-padding * 0.5;
    position: absolute;
    top: 0;
    right: 0;
  }

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
