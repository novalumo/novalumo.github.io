<template>
<div>
    <!-- Header -->
    <header>
        <a class="logo" href="/">
            <img src="/img/logo.svg" width="154">
        </a>
        <ul class="header-menu">
            <li class="header-menu-item">
                <a href="/business/">Business<span>事業紹介</span></a>
            </li>
            <li class="header-menu-item">
                <a href="/company/">Company<span>会社情報</span></a>
            </li>
            <li class="header-menu-item">
                <a href="/contact/">Contact<span>お問い合わせ</span></a>
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
            <img class="sp-logo" src="/img/logo.svg" width="120">
            <a href="#" onclick="closeSmartMenu();" class="close-btn">
                <img src="/img/btn-close.svg" width="30">
            </a>
        </div>
        <ul class="header-menu-sp">
            <li class="header-menu-item-sp">
                <a href="/business/">Business<span>事業紹介</span></a>
            </li>
            <li class="header-menu-item-sp">
                <a href="/company/">Company<span>会社情報</span></a>
            </li>
            <li class="header-menu-item-sp">
                <a href="/contact/">Contact<span>お問い合わせ</span></a>
            </li>
        </ul>
    </div>
</div>
</template>

<style>

</style>
