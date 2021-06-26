<template>
  <div>

    <!-- info -->
    <div class="info" v-if="showInfo">
      <p style="margin: 0;">
        <i class="fas fa-fw fa-exclamation-circle"></i>
      </p>
    </div>

    <!-- hero -->
    <div class="cover">
      <div class="cover-body">
        <h1 class="text">We Brighten <span>The World</span></h1>
        <!-- i18n -->
        <div v-if="this.lang == 'ja'">
          <p class="text"><span>世界に</span><span>希望の光を届ける</span><span>企業を目指しています。</span></p>
        </div>
        <div v-if="this.lang == 'en'">
          <p class="text"><span>Novalumo is</span> <span>A New World</span> <span>Creation Company.</span></p>
        </div>
        <div v-if="this.lang == 'eo'">
          <p class="text"><span>Novalumo estas</span> <span>Nova Monda</span> <span>Krea Kompanio.</span></p>
        </div>
        <div v-if="this.lang == 'de'">
          <p class="text"><span>Novalumo ist</span> <span>eine Firma zur</span> <span>Schaffung einer neuen Welt.</span></p>
        </div>
        <div v-if="this.lang == 'fr'">
          <p class="text"><span>Novalumo est</span> <span>une Compagnie de</span> <span>Création du Nouveau Monde.</span></p>
        </div>
        <!-- i18n -->
      </div>
    </div>

    <!-- <div class="news">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h1 class="">News</h1>
            <p>Novalumoからのお知らせ、最新情報はこちらです。</p>
          </div>
          <div class="col-md-8">
            <news-card :limit="3"/>
          </div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
import NewsCard from "~/components/NewsCard.vue"

export default {
  components: { NewsCard },
  data() {
    return {
      lang: this.$i18n.localeProperties.code,
    }
  },
  head() {
    return {
      titleTemplate: '',
      title: 'Novalumo合同会社 | A New World Creation Company',
    }
  },
  computed: {
    showInfo: function() {
      return false
    }
  },
}
</script>

<style lang="scss" scoped>
.cover {
  background: url(/img/backgrounds/bg.jpg);
  background-size: cover;
  background-position: center;
  height: 80vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .cover-body {
    color: #eee;
    text-shadow: 1px 1px 50px #ccc;
    cursor: default;
    padding: 0 5vw;
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
      line-height: 1.2;
      margin: 10px 0 0 0;

      span {
        display: inline-block;
      }
    }
  }

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
</style>
