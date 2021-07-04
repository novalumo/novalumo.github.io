<template>

  <div class="cookie" id="cookie">
    <p>
      お客様に快適にウェブサイトをご利用いただくため、Cookie（クッキー）を利用しています。
      Cookieの使用方法の詳細については、 <nuxt-link to="/privacy">プライバシーポリシー</nuxt-link>を参照してください。
    </p>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.cookie {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 24px;
  margin: 0 24px;
  background: #fff;
  border: solid 1px #eee;
  border-radius: 32px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  text-align: center;
  z-index: 300;
  cursor: pointer;
  transition: linear .1s;

  &:hover {
    opacity: .5;
  }

  .hide {
    display: none;
  }

  p {
    margin: 0;
    padding: 10px;
    font-size: .75rem;
  }
}
</style>