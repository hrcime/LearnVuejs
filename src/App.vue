<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "assets/css/bootstrap.min.css";
@import './assets/scss/paper-kit.scss';
@import "https://fonts.googleapis.com/css?family=Montserrat:400,700,200";
@import "https://use.fontawesome.com/releases/v5.8.2/css/all.css";
  #app{
    height: 100vh;
    background: #fafafa;
  }
</style>
