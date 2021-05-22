<template>
<div>
    <Header />
    <div id="overlay"></div>
    <transition name="page">
      <Nuxt />
    </transition>
    <Footer />
</div>
</template>

<script>
export default {
  head: {
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
  },
}
</script>

<style>

</style>
