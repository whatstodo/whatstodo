<template>
  <div class="view view-add-position">
    <div class="heading">{{ content.heading }}</div>
    <Message v-if="message" :text="message" />
    <textarea v-model="data.title" placeholder="Titel" />
    <textarea v-model="data.declaration" placeholder="Deklaration" />
    <textarea v-model="data.implementation" placeholder="Umsetzung" />
    <textarea v-model="data.references" placeholder="Referenzen" />
    <a @click="publish">{{ content.publish }}</a>
  </div>
</template>

<script>
import ViewMixins from '@/mixins/ViewMixin'
import Message from '@/components/Message'

export default {
  mixins: [ViewMixins],

  components: {
    Message
  },

  data() {
    return {
      contentId: 'add-position',
      data: {
        title: '',
        declaration: '',
        implementation: '',
        references: ''
      }
    }
  },

  methods: {
    publish() {
      this.$store.dispatch('positions/add', this.data)
      this.$router.push({
        name: 'Positions',
        params: { messageId: 'position_successful' }
      })
    }
  }
}
</script>

<style lang="scss">
.view-add-position {
  textarea {
    @include content-item;
    display: block;
    border: none;
    outline: none;
    resize: none;
  }
}
</style>
