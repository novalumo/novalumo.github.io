<template>
    <div>

      <div class="info" v-if="showInfo">
        <p><i class="fas fa-fw fa-exclamation-circle"></i> 2021年3月1日は休業日とさせていただきます。</p>
      </div>

        <div class="cover">
            <div class="cover-body">
                <h1>We Brighten <span>The World</span></h1>
                <p><span>世界に</span><span>希望の光を届ける</span><span>企業を目指しています。</span></p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  computed: {
    showInfo: function() {

      let now = new Date();
      let exp = new Date(2021, 3, 2, 0, 0, 0);

      if (now < exp) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.cover {
  background: url(/img/backgrounds/bg.jpg);
  background-size: cover;
  background-position: center;
  height: 80vh;
  position: relative;

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
}
.cover .cover-body {
  color: #eee;
  text-shadow: 1px 1px 50px #ccc;
  cursor: default;
  padding: 30vh 54px;
  position: relative;
  z-index: 1;

  h1 {
    font-size: calc(18px + 3.4vw);
    font-weight: bold;
    margin: 0;

    span {
      display: inline-block;
      background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(255, 255, 255, 0);
      color: #ff0000;
    }
  }

  p {
    font-size: calc(18px + .7vw);
    font-weight: 700;
    margin: 0;

    span {
      display: inline-block;
    }
  }
}

.info {
  padding: 10px 14px;
  background: #dc3545;
  color: #fff;
  font-weight: bold;
  user-select: none;
  cursor: default;
}
</style>
