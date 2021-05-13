<template>
<div id="error">
  <div id="errorBox">
    <div>
      <h1>404 Not Found</h1>
      <p>お探しのページは見つかりませんでした</p>
      <small><span id="counter"></span>秒後にトップページへ移動します</small>
    </div>
  </div>
</div>
</template>

<script>
export default {
  mounted() {
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
