<template>
  <div class="cookie row">
    <div class="col-md-10 description">
      <p class="about">Cookie（クッキー）について</p>
      <p>
          このページでは、お客様に快適にウェブサイトをご利用いただくため、Cookie（クッキー）を利用しています。
          Cookie（クッキー）の使用方法の詳細については、 <nuxt-link to="/privacy">プライバシーポリシー</nuxt-link>を参照してください。
          「同意する」をクリックしてアクティブにするか、不要な場合は「同意しない」をクリックしてください。
      </p>
    </div>
    <div class="col-md-2 buttons">
      <div>
        <button @click="cookie = false">同意する</button>
        <button @click="cookie = false" class="dont">同意しない</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookie: false
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  display: flex;
  border: solid 1px #eee;
  border-radius: 18px 18px 0 0;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  padding: 18px;
  margin: 0;

  p {
    margin: 0;
    font-size: 14px;
  }

  .about {
    font-size: 18px;
    font-weight: bold;
  }

  button {
    background: #333;
    color: #fff;
    border: solid 1px #ccc;
    padding: 10px;
    width: 100%;
    margin: 0 0 4px 0;
    transition: .2s;

    &:not(.dont):hover {
      opacity: .8;
    }
  }

  .dont {
    border: none;
    background: transparent;
    color: #000;
    margin: 0;

    &:hover {
      background: #ccc;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
    
}
</style>