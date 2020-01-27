<template>
    <div>
        <header class="fixed-top">
            <nav class="navbar navbar-expand-md navbar-light">
                <!-- <a href="javascript:void(0)" class="closebtn">&times;</a> -->

                <!-- logo -->
                <router-link to="/">
                    <img class="logo" src="/assets/img/logo.svg" alt="logo">
                </router-link>

                <!-- menu -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <router-link id="sign-in" class="nav-link" to="/services" tag="li" active-class="active" exact>
                            Services</router-link>
                        <router-link id="sti
                        " class="nav-link" to="/store" tag="li" active-class="active">Store</router-link>

                    </ul>

                    <ul class="navbar-nav ml-auto pr-5">
                        <router-link id="join" class="nav-link" to="/join" tag="li" active-class="active">Join as a pro
                        </router-link>
                        <router-link id="sign-up" class="nav-link" to="/signup" tag="li" active-class="active">Sign up
                        </router-link>
                        <router-link id="login" class="nav-link" to="/login" tag="li" active-class="active">Log In
                        </router-link>
                    </ul>
                </div>

                <!-- hamburger icon -->
                <a href="javascript:void(0)" class="d-md-none d-lg-none" @click="toggle()"> <img
                        src="../../assets/img/icons/hamburger-preview.png" alt="hamburger" id="hambuger">
                </a>

                <!-- close button -->
                <a href="javascript:void(0)" class="closebtn" @click="toggle()">&times;
                </a>
            </nav>
        </header>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isClose: true
        }
    },

    methods: {
        toggle() {
            let sideBar = document.getElementById("mySidenav");
            let closeBtn = document.querySelector(".closebtn");
            let hambuger = document.querySelector("#hambuger");
            if (this.isClose){
                sideBar.classList.add("is-open");
                closeBtn.style.display = "block"
                hambuger.style.display = "none"
            } else {
                sideBar.classList.remove("is-open");
                closeBtn.style.display = "none"
                hambuger.style.display = "block"
            }
            this.isClose = !this.isClose
        }
    }
}



</script>

<style scoped>
    nav {
        left: 0rem;
        top: 0rem;
        background-color: #FFFFFF;
        height: 3.75rem;
        box-shadow: 0rem, 0.25rem 0.625rem rgba(0, 0, 0, 0.25);
    }


    li {
        font-family:"avenir-next-lt-pro-regular";
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.0625rem;
        text-align: center;
        color: #333456;
        cursor: pointer;
    }

    #nav {
        padding: 1.875rem;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #hambuger{
        width: 40px;
        height: 40px;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
    .closebtn{
        font-size: 3rem;
        display: none;
        color: #000;
        position: absolute;
        right: 20px;
        text-decoration: none
    }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
     .navbar-nav {
        background-color: #fff !important;
    }

}
    /* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

    .logo {
        margin-left: 1.75rem;
        top: 0.5rem;
        width: 6.5625rem
    }
    .navbar-nav {
        background-color: #fff !important;
    }
    .menu {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #fff;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
      }

      .menu a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181 !important;
        display: block;
        transition: 0.3s;
      }

      .menu a:hover {
        color: #f1f1f1;
      }

      .menu .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
      }

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
     .logo {
        margin-left: 0rem;
        top: 0.5rem;
        width: 6.5625rem;
    }
    .navbar-collapse{
        background-color: #FFFFFF;
    }

    .navbar-nav{
        padding-right: 0rem !important;
    }

     .navbar {
    height: 50px;
    width: 100%;
  }

  .nav-link {
    display: inline-block;
  }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .logo {
        margin-left: 7.5rem;
        top: 0.75rem;
        width: 6.5625rem
    }

     .navbar {
    height: 50px;
    width: 100%;
  }

  .nav-link {
    display: inline-block;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  
}
</style>