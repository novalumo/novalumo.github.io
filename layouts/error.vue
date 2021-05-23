<template>
<div id="error">
  <div id="errorBox">
    <div>
      <h1>{{ error.statusCode }} {{ message[0] }}</h1>
      <p>{{ message[1] }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    message() {
      if (this.error.statusCode === 404) {
        return ['Not Found', 'お探しのページは見つかりませんでした']
      }
      return ['Error', 'エラーが発生しました']
    }
  },
  mounted() {
    if (this.error.statusCode === 404) {
      let count = 10
      const countUp = () => {
        if (count != 0) {
          document.getElementById('counter').innerHTML = count
          console.log(count--);
          setTimeout(countUp, 1000);
        } else {
          location.href = '/'
        }
      }
      countUp()
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.localeProperties.iso
      }
    }
  },
}
</script>

<style lang="scss">
#error {
  background: url(https://source.unsplash.com/GQD3Av_9A88);
  background-size: cover;
  background-position: bottom center;
  height: 100%;
  min-height: 640px;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  h1, p {
    font-weight: 700;
    margin: 0;
    user-select: none;
    cursor: default;
  }

  h1 {
    font-size: 3rem;
  }

/*
  &::after {
    background: url(/img/mask.png) left top repeat;
    background-size: 2px auto;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
  }
  */
}
</style>
