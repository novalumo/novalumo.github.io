<template>
    <div>
        <div class="title">
          <div class="title-body">
            <h1>Business</h1>
            <p>事業紹介</p>
          </div>
        </div>

        <div class="container my-3">
          <div class="row mx-2">
            <div class="col">
              <article>
                <h2 class="heading text">{{ $t('business.ict.title') }}</h2>
                <p>
                  {{ $t('business.ict.body') }}
                </p>

                <h2 class="heading text">{{ $t('business.system.title') }}</h2>
                <p>
                  {{ $t('business.system.body') }}
                </p>

                <h2 class="heading text">{{ $t('business.contents.title') }}</h2>
                <p>
                  {{ $t('business.contents.body') }}
                </p>

                <h2 class="heading text">{{ $t('business.management.title') }}</h2>
                <p>
                  {{ $t('business.management.body') }}
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
          title: this.$t('business.title'),
      }
  },
  mounted() {
    //document.getElementById('midashi').classList.add('animate')
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
