<template>
<div id="error">
  <div id="errorBox">
    <div>
      <h1>404 Not Found</h1>
      <p>お探しのページは見つかりませんでした</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  head() {
    return {
      title: '404'
    }
  }
}
</script>

<style lang="scss" scoped>
#error {
  background: url(https://source.unsplash.com/GQD3Av_9A88/1280x720);
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
