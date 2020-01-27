<template>
    <nav id="mySidenav" class="sidenav">
        <ul>
        <router-link id="sign-in" class="nav-link" to="/services" tag="li" active-class="active" exact>
            Services</router-link>
        <router-link id="sti" class="nav-link" to="/store" tag="li" active-class="active">Store</router-link>
        <router-link id="join" class="nav-link" to="/join" tag="li" active-class="active">Join as a pro
        </router-link>
        <router-link id="sign-up" class="nav-link" to="/signup" tag="li" active-class="active">Sign up
        </router-link>
        <router-link id="login" class="nav-link" to="/login" tag="li" active-class="active">Log In
        </router-link>
        </ul>
    </nav>
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

.sidenav li {
  text-decoration: none !important;
  font-size: 1.5rem;
  /* color: #818181; */
  color: rgba(0,0,0,.5);
  display: block;
  transition: 0.3s;
  text-align: left;
}

.sidenav li:hover {
  color: #000;
  cursor: pointer;
}

</style>