<template>
  <div class="view view-participants">
    <Heading :message="message">{{ content.heading }}</Heading>
    <RouterLink
      v-for="user of users"
      :key="user.id"
      :to="{ name: 'Profile', params: { userId: user.id } }"
      class="participant"
    >
      {{ user.name }}
    </RouterLink>
  </div>
</template>

<script>
import ViewMixin from '@/mixins/ViewMixin'
import Heading from '@/components/Heading'

export default {
  mixins: [ViewMixin],

  components: {
    Heading
  },

  data() {
    return {
      contentId: 'participants'
    }
  },

  computed: {
    users() {
      return this.$store.getters['users/items']
    }
  },

  created() {
    this.$store.dispatch('users/load')
  }
}
</script>

<style lang="scss">
.view-participants {
  .participant {
    display: block;
    @include content-item;
    @include heading;
    cursor: pointer;

    text-decoration: none;
  }
}
</style>
