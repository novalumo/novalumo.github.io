<template>
  <div class="row hidden" id="langSwitch">
    <div>
      <i class="fas fa-fw fa-2x fa-angle-right" id="hideArrow" @click="toggle()"></i>
      <p class="about"><i class="fas fa-fw fa-globe"></i> Language</p>
    </div>
    <div>
    
    <!-- Switch -->
    <select v-model="selectedLanguage" @change="onChange(selectedLanguage)">
      <option
        v-for="(locale, index) in $i18n.locales"
          :key="index"
          :value="locale.code"
          :selected="locale.code === locale"
      >{{locale.name}}</option>
    </select>
    <!-- / Switch -->

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: '',
    };
  },
  created() {
    this.selectedLanguage = this.$i18n.locale
  },
  mounted() {
    this.toggleOnLoad() // 訪れたことがある場合はデフォルトで隠す
  },
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event))
    },
    toggle() {
      document.getElementById('langSwitch').style.transition = 'linear .1s'
      // Show
      if (document.getElementById('langSwitch').classList.contains('hidden')) {
        document.getElementById('langSwitch').style.transform = 'translateX(0%)'
        document.getElementById('hideArrow').style.transform = 'rotateZ(0deg)'
        document.getElementById('langSwitch').classList.remove('hidden')
      // Hide
      } else {
        document.getElementById('langSwitch').style.transform = 'translateX(85%)'
        document.getElementById('hideArrow').style.transform = 'rotateZ(180deg)'
        document.getElementById('langSwitch').classList.add('hidden')
      }
    },
    toggleOnLoad() {
      const browserLang = (window.navigator.languages && window.navigator.languages[0]) ||
        window.navigator.language ||
        window.navigator.userLanguage ||
        window.navigator.browserLanguage

      // ユーザー言語と表示言語が違う場合は表示
      if (browserLang != this.selectedLanguage) {
        document.getElementById('langSwitch').style.transform = 'translateX(0%)'
        document.getElementById('hideArrow').style.transform = 'rotateZ(0deg)'
        document.getElementById('langSwitch').classList.remove('hidden')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#hideArrow {
  position: absolute;
  top: 55px;
  left: 0;
  line-height: 0;
  transform: translateY(-50%);
  transform: rotateZ(180deg);
  // -webkit-transform: translateY(-50%);
  // -ms-transform: translateY(-50%);
  transition: linear .2s;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
  
}
#langSwitch {
  position: fixed;
  top: auto;
  bottom: 14px;
  right: 0;
  width: 250px;
  max-width: 100%;
  background: #fff;
  display: flex;
  border: solid 1px #eee;
  border-radius: 18px 0 0 18px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  padding: 14px 10px 18px 28px;
  margin: 0;
  display: flex;
  align-items: center;
  // デフォルト非表示
  transform: translateX(85%);
  z-index: 100;

  .about {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }

  select {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    background: #333;
    color: #fff;
    border: solid 1px #ccc;
    width: 100%;
    //max-width: 280px;
    padding: 10px 14px;
    margin: 0;
    outline: none;
    transition: .2s;

    &:hover {
      cursor: pointer;
      opacity: .8;
    }
  }
    
}
</style>