<template>
  <div id="app">
    <header-content></header-content>
    <transition name='fade' mode='out-in'>
      <router-view></router-view>
    </transition>
    <footer-content></footer-content>
  </div>
</template>

<script>

import HeaderContent from './components/HeaderContent'
import FooterContent from './components/FooterContent'


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