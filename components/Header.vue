<template>
  <div>
    <!-- Desktop -->
    <header>
      <nuxt-link :to="localePath('/')" class="logo">
          <img src="/img/logo.svg" width="154">
      </nuxt-link>
      <ul class="header-menu">
        <li class="header-menu-item">
          <nuxt-link :to="localePath('/service/')">{{$t('header.service')}}</nuxt-link>
        </li>
        <li class="header-menu-item">
          <nuxt-link :to="localePath('/company/')">{{$t('header.company')}}</nuxt-link>
        </li>
        <li class="header-menu-item">
          <nuxt-link :to="localePath('/contact/')">{{$t('header.contact')}}</nuxt-link>
        </li>
      </ul>
      <div class="menu-opener">
        <a href="#" @click="openSPMenu()" class="btn-open">
          <img src="/img/btn-open.svg" width="32">
        </a>
      </div>
    </header>
    
    <!-- Mobile -->
    <div class="header-menubox-sp" id="sp_menu">
      <div class="menu-sp-top">
        <a href="#" @click="closeSPMenu()" class="close-btn">
          <img src="/img/btn-close.svg" width="30">
        </a>
      </div>
      <ul class="header-menu-sp">
        <li class="header-menu-item-sp">
          <nuxt-link :to="localePath('/service/')">{{$t('header.service')}}</nuxt-link>
        </li>
        <li class="header-menu-item-sp">
          <nuxt-link :to="localePath('/company/')">{{$t('header.company')}}</nuxt-link>
        </li>
        <li class="header-menu-item-sp">
          <nuxt-link :to="localePath('/contact/')">{{$t('header.contact')}}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  methods: {
    openSPMenu() {
      $('#overlay').fadeIn()
      document.getElementById('sp_menu').classList.toggle('active')
      document.body.style['overflow-y'] = 'hidden'
    },
    closeSPMenu() {
      $('#overlay').fadeOut()
      document.getElementById('sp_menu').classList.remove('active')
      document.body.style['overflow-y'] = 'auto'
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background: #fff;
  color: #333;
  padding: 0 0 0 20px;
  border-bottom: solid 1px #ddd;
  display: flex;
  z-index: 999;
  user-select: none;

  .logo {
    display: flex;
    text-decoration: none;

    img {
      pointer-events: none;
    }
  }
}

.header-menu {
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 auto;
  font-size: 18px;
  position: relative;
  right: 12px;
  // line-height: 1.15;
}

.header-menu-item {
  list-style: none;
  padding: 0;
  margin: 0;
  
  a {
    display: block;
    text-decoration: none;
    text-align: center;
    letter-spacing: 1.2px;
    // padding: 28px;
    padding: 28px 18px;
    color: #333;
    // border-left: solid 1px #ddd;
    transition: .2s;
    
    &:hover {
      background: #eee;
    }
    
    span {
      display: block;
      font-size: .8rem;
      margin-top: 4px;
    }
  }
}

.header-menubox-sp {
  position: fixed;
  right: -100%;
  opacity: 0;
  transition: .5s;
}

.menu-opener {
  display: none;
}

  /* --- sp --- */
@media (max-width: 777px) {
  
  header {
    height: 75px;
  }
  
  .header-menu {
    display: none;
  }
  
  .menu-opener {
    display: block;
    margin-left: auto;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  .active {
    position: absolute;
    right: 0;
    opacity: 1;
  }
  
  .header-menubox-sp {
    top: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    max-width: 265px;
    height: 100%;
    background: #fff;
    padding: 3%;
    overflow-y: scroll;
  }
  
  .menu-sp-top {
    display: flex;

    img {
      max-height: 35px;
      position: relative;
      left: 2px;
    }
    
    .close-btn {
      margin-left: auto;
    }
  }
}

.header-menu-sp {
  margin: 10px 0 10px 0;
  padding: 0;
}

.header-menu-item-sp {
  list-style: none;
  
  a {
    display: block;
    text-decoration: none;
    text-align: center;
    letter-spacing: 1.7px;
    padding: 28px;
    color: #333;
    font-size: 1.2rem;
    transition: .2s;
    
    &:hover {
      background: #eee;
    }
    
    span {
      display: block;
      font-size: .8rem;
    }
  }
}
</style>
