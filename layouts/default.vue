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
        lang: this.$i18n.localeProperties.iso
      },
      script: [
        {
          src: '/js/hello.js',
        },
        {
          src: 'https://code.jquery.com/jquery-3.5.1.min.js',
          body: true
        },
        {
          src: '/js/main.js',
          body: true
        },
      ]
    }
  },
}
</script>

<style>

</style>
