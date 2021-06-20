<template>
  <div>

  </div>
</template>

<script>
export default {
  head() {
    return {
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

<style lang="scss" scoped>
</style>
