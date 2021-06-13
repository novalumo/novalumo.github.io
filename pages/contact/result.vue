<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1>Contact</h1>
            <p>お問い合わせ</p>
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
      title: 'お問い合わせ - 送信完了',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
      ]
    }
  }
}
</script>

