<template>
  <div>
    <div class="title">
      <div class="title-body">
        <h1 class="animate" data-animation="title">Contact</h1>
        <p class="animate" data-animation="title">お問い合わせ</p>
      </div>
    </div>

    <div class="container my-5">
      <div class="row">
        <div class="col py-3" style="text-align:center;">
          <h2>{{ $t('contact.result.submitted') }}</h2>
          <p>{{ $t('contact.result.comment') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('contact.result.submitted'),
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
      ]
    }
  },
  mounted() {
    this.$intersectionObserver()
  }
}
</script>

