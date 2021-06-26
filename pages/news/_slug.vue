<template>
  <div>
    <div class="container my-3">
        <div class="row mx-2">
          <div class="col">
            <h1>{{ this.slug }}</h1>
            <iframe :src="'/docs/' + this.slug + '.md?' + this.slug" frameborder="0" style="width:100%; height: 95vh; border: solid 1px #333;"></iframe>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
  head() {
    return {
      title: this.slug,
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

<style scoped>

</style>