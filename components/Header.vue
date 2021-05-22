<template>
<div>
    <!-- Header -->
    <header>
        <nuxt-link to="/" class="logo">
            <img src="/img/logo.svg" width="154">
        </nuxt-link>
        <ul class="header-menu">
            <li class="header-menu-item">
                <nuxt-link to="/business/">Business<span>事業紹介</span></nuxt-link>
            </li>
            <li class="header-menu-item">
                <nuxt-link to="/company/">Company<span>会社情報</span></nuxt-link>
            </li>
            <li class="header-menu-item">
                <nuxt-link to="/contact/">Contact<span>お問い合わせ</span></nuxt-link>
            </li>
        </ul>
        <div class="menu-opener">
            <a href="#" onclick="openSmartMenu();" class="btn-open">
                <img src="/img/btn-open.svg" width="32">
            </a>
        </div>
    </header>
    
    <!-- spHeader -->
    <div class="header-menubox-sp" id="sp_menu">
        <div class="menu-sp-top">
            
            <a href="#" onclick="closeSmartMenu();" class="close-btn">
                <img src="/img/btn-close.svg" width="30">
            </a>
        </div>
        <ul class="header-menu-sp">
            <li class="header-menu-item-sp">
                <nuxt-link to="/business/">Business<span>事業紹介</span></nuxt-link>
            </li>
            <li class="header-menu-item-sp">
                <nuxt-link to="/company/">Company<span>会社情報</span></nuxt-link>
            </li>
            <li class="header-menu-item-sp">
                <nuxt-link to="/contact/">Contact<span>お問い合わせ</span></nuxt-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
