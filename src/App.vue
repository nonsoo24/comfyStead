<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {

  // openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  // },
  // closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
  // },
 
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

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  /* width: 250px; */
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
   margin-left: 0px;
}



html, body {
    max-width: 100%;
    overflow-x: hidden;
}
</style>
