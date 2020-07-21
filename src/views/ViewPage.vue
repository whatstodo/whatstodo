<template>
  <div class="view view-page">
    <Heading :message="message">{{ content.title }}</Heading>
    <Markdown class="text" :text="content.text" />
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import Markdown from '@/components/Markdown'
import Heading from '@/components/Heading'

export default {
  mixins: [ViewMixin],

  components: {
    Markdown,
    Heading
  },

  props: {
    name: String
  },

  computed: {
    dynamicContentId() {
      return this.$route.meta.contentId
    }
  },

  watch: {
    dynamicContentId(value) {
      this.contentId = value
      this.loadDynamicContent()
    }
  },

  mounted() {
    this.loadDynamicContent()
  },

  methods: {
    loadDynamicContent() {
      const contentId = (this.contentId = this.dynamicContentId)
      contentId && this.$store.dispatch('content/load', contentId)
    }
  }
}
</script>

<style lang="scss">
.view-page {
  .text {
    padding-top: 1em;

    padding-left: $content-padding;
    padding-right: $content-padding;

    p {
      margin-top: 0;
    }

    hr {
      border: 0;
      border-top: $line-width solid;
      margin-left: -$content-padding;
      width: calc(100% + 2 * #{$content-padding});
      margin-bottom: 1em;
      color: inherit;
    }
  }
}
</style>
