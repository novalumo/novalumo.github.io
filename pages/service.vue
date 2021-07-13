<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1 class="animate" data-animation="title">Service</h1>
            <p class="animate" data-animation="title">事業紹介</p>
          </div>
        </div>

        <div class="container py-3">
          <div class="row mx-2">
            <div class="col">
              <article>
                <h2 class="heading text">{{ $t('service.ict.title') }}</h2>
                <p>
                  {{ $t('service.ict.body') }}
                </p>

                <h2 class="heading text">{{ $t('service.system.title') }}</h2>
                <p>
                  {{ $t('service.system.body') }}
                </p>

                <h2 class="heading text">{{ $t('service.contents.title') }}</h2>
                <p>
                  {{ $t('service.contents.body') }}
                </p>

                <h2 class="heading text">{{ $t('service.management.title') }}</h2>
                <p>
                  {{ $t('service.management.body') }}
                </p>

              </article>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('service.title'),
      meta: [
        // { hid: 'description', name: 'description', content: this.$t('service.description') }
      ]
    }
  },
  mounted() {
    this.$intersectionObserver()
  }
}
</script>

<style lang="scss" scoped>
.img-fluid {
  border: solid 2px #eee;
  border-radius: 1.5rem;
  margin: 0;
}

article h2 {
  line-height: 1.5;
}
</style>
