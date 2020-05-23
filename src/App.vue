<template>
  <div id="app">
    <header-content></header-content>
    <transition>
      <router-view></router-view>
    </transition>
    <footer-content></footer-content>
  </div>
</template>

<script>

import HeaderContent from './components/HeaderContent'
import FooterContent from './components/FooterContent'
import './assets/style/main.scss'

export default {
  name: "App",
  components: {
    HeaderContent,
    FooterContent
  }
};
</script>

<style>

</style>