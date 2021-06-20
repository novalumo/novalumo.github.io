<template>
<div>
    <Header />
    <div id="overlay"></div>
    <transition name="page">
      <Nuxt />
    </transition>
    <Footer />
    <Language />
    <!-- <Cookie /> -->
</div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.5.1.min.js',
          body: true
        },
        {
          src: '/js/main.js',
          body: true
        },
        {
          src: '/js/hello.js',
        },
      ]
    }
  },
  methods: {
    setVisitFlg() {
      if (localStorage.getItem('visited') == null) {
        localStorage.setItem('visited', 'true')
      }
    }
  },
  mounted() {
    this.setVisitFlg()
  }
}
</script>

<style>

</style>
