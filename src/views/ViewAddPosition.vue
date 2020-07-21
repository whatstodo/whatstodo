<template>
  <div class="view view-add-position">
    <Heading :message="message"
      ><span>{{ content.heading }}</span
      ><IconButton name="close" slot="buttons" @click="close()"
    /></Heading>
    <input
      v-model="data.title"
      maxlength="40"
      placeholder="Titel (max. 40 Zeichen)"
    />
    <textarea v-model="data.declaration" placeholder="Deklaration" />
    <textarea v-model="data.implementation" placeholder="Umsetzung" />
    <textarea v-model="data.references" placeholder="Referenzen" />
    <ButtonsBar>
      <a slot="right" class="button" @mousedown="publish">{{
        content.publish
      }}</a>
    </ButtonsBar>
  </div>
</template>

<script>
import { slugify } from '@/utils'
import ViewMixins from '@/mixins/ViewMixin'
import Heading from '@/components/Heading'
import ButtonsBar from '@/components/ButtonsBar'
import IconButton from '@/components/IconButton'

export default {
  mixins: [ViewMixins],

  components: {
    Heading,
    ButtonsBar,
    IconButton
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
    validate() {
      return Object.values(this.data).every(value => value.trim() !== '')
    },

    checkId(id) {
      return !this.$store.state.positions.byId[id]
    },

    publish() {
      if (!this.validate()) {
        this.showMessage('missing_fields')
        return
      }

      const id = slugify(this.data.title)
      if (!this.checkId(id)) {
        this.showMessage('name_already_taken')
        return
      }

      this.$store.dispatch('positions/add', { ...this.data, id })
      this.$router.push({
        name: 'Positions',
        params: { messageId: 'position_successful' }
      })
    },

    close() {
      this.$router.push({ name: 'Positions' })
    }
  }
}
</script>

<style lang="scss">
.view-add-position {
  input,
  textarea {
    @include content-item;
    display: block;
    border: none;
    outline: none;
    border-bottom: $line-width solid;
  }

  textarea {
    resize: none;

    &:focus {
      height: 50vh;
    }
  }
}
</style>
