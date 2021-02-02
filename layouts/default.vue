<template>
<div>
    <Header />
    <!-- Overlay -->
    <div id="overlay">
    </div>
    <Nuxt />
    <Footer />
</div>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.min.js',
        body: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js',
        body: true
      },
      {
        src: '/js/main.js',
        body: true
      },
    ]
  }
}
</script>

<style>

</style>
