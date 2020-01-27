<template>
        <nav id="mySidenav" class="sidenav">
            <a href="#">Services</a>
            <a href="#">Store</a>
            <a href="#">Join as a pro</a>
            <a href="#">Sign up</a>
            <a href="#">Log In</a>
        </nav>
</template>

<script>
export default {
    data() {
        return {
            methods: {
                // closeNav() {
                //     document.getElementById("mySidenav").style.width = "0";
                //     document.getElementById("main").style.marginRight = "0";
                // },
            }
        }
    }
}
</script>

<style>
    .sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 73px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none !important;
  font-size: 1.5rem;
  /* color: #818181; */
  color: rgba(0,0,0,.5);
  display: block;
  transition: 0.3s;
  text-align: left;
}

.sidenav a:hover {
  color: #000;
}

</style>