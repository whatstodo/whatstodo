<template>
  <div id="app">
    <PageHeader />
    <RouterView />
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
