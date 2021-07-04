<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-12">
        <news-card :limit="5"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ニュースルーム',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
      ]
    }
  },
  mounted() {
    location.href = '/'
  }
}
</script>

<style lang="scss" scoped>
</style>
