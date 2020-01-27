<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {


    }
  }
  }
</script>

<style>
@font-face {
  font-family: "avenir-next-lt-pro-regular";
  src: url("/assets/fonts/AvenirNextLTPro-Regular.otf") format("woff"),
    url("/assets/fonts/AvenirNextLTPro-Regular.otf") format("opentype"),
    url("/assets/fonts/AvenirNextLTPro-Regular.otf") format("truetype");
}



#app {
  font-family: 'avenir-next-lt-pro-regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.is-open {
  width: 200px !important;
}

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}
</style>
