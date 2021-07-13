<template>
<div>
  <Header />
  <div id="overlay" @click="hideOverlay()"></div>
  <transition name="page">
    <Nuxt />
  </transition>
  <Footer />
  <Language />
  <!-- <Cookie /> -->
</div>
</template>

<script>
import $ from 'jquery'

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
    hideOverlay() {
      $('#overlay').fadeOut();
      document.getElementById('sp_menu').classList.remove('active');
      document.body.style['overflow-y'] = 'auto';
    }
  },
}
</script>

<style>

</style>
