<template>
  <div class="lang-switch row">
    <div>
      <p class="about"><i class="fas fa-fw fa-globe"></i> {{ $t('switch') }}</p>
    </div>
    <div>
      <!--
      <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
      -->
      
      <select v-model="selectedLanguage" @change="onChange(selectedLanguage)">
        <option
          v-for="(locale, index) in $i18n.locales"
            :key="index"
            :value="locale.code"
            :selected="locale.code === locale"
        >{{locale.name}}</option>
      </select>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: ''
    };
  },
  created() {
    this.selectedLanguage = this.$i18n.locale;
  },
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event));
    }
  }
}
</script>

<style lang="scss" scoped>
.lang-switch {
  position: fixed;
  top: auto;
  bottom: 14px;
  right: 0;
  width: 380px;
  max-width: 100%;
  background: #fff;
  display: flex;
  border: solid 1px #eee;
  border-radius: 18px 0 0 18px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  padding: 18px;
  margin: 0;
  display: flex;
  align-items: center;
  z-index: 1000;

  .about {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }

  select {
    background: #333;
    color: #fff;
    border: solid 1px #ccc;
    width: 100%;
    //max-width: 280px;
    padding: 10px 14px;
    margin: 0;
    outline: none;
    transition: .2s;

    &:not(.dont):hover {
      opacity: .8;
    }
  }
    
}
</style>