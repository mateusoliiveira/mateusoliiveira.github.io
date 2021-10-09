<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  export default {
    components: {
      Header,
    },
  };
</script>
<style>
  @font-face {
    font-family: "Corsa Grotesk";
    src: url("../src/assets/CorsaGrotesk.otf");
  }
  * {
    color: #fff !important;
    text-decoration: none !important;
    box-sizing: border-box !important;
    margin: 0px !important;
    padding: 0px !important;
  }
  body {
    background-color: #000000;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #000000;
    font-family: "Corsa Grotesk", sans-serif;
  }
</style>
