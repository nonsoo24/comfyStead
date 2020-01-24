<template>
    <div>
        <header class="fixed-top">
            <nav class="navbar navbar-expand-lg navbar-light">
                 <a href="javascript:void(0)" class="closebtn">&times;</a>
                <!-- logo -->
                <router-link to="/">
                 <img class="logo" src="/assets/img/logo.svg" alt="logo">
                    </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- menu -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <router-link id="sign-in" class="nav-link" to="/services" tag="li" active-class="active" exact>Services</router-link>
                        <router-link id="sti
                        " class="nav-link" to="/store" tag="li" active-class="active">Store</router-link>

                    </ul>
                    <ul class="navbar-nav ml-auto pr-5">
                        <router-link id="join" class="nav-link" to="/join" tag="li" active-class="active">Join as a pro</router-link>
                        <router-link id="sign-up" class="nav-link" to="/signup" tag="li" active-class="active">Sign up</router-link>
                        <router-link id="login" class="nav-link" to="/login" tag="li" active-class="active">Log In</router-link>
                    </ul>
                </div>
            </nav>
        </header>

    </div>
</template>

<script>

export default {
    data() {
        return {
            isClose: false
        }
    },
    methods: {
        // openNav() {
        //     let sideNav = document.getElementById("header").style.width = "250px";
        //     document.getElementById("main").style.marginLeft = "250px";
        //     sideNav.classList.add("menu");
        // },

        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        },

        openNav(x) {
            if (x.matches) { // If media query matches
                document.body.style.backgroundColor = "yellow";
            } else {
                document.body.style.backgroundColor = "pink";
        }
    }
    }

        // let x = window.matchMedia("(max-width: 700px)")
        // myFunction(x) // Call listener function at run time
        // x.addListener(myFunction) // Attach listener function on state changes
           // },

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

    #nav a.router-link-exact-active {
        color: #42b983;
    }


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
     .navbar-nav {
        background-color: #fff !important;
    }

    .position-right {
    top: 0;
    right: 0;
    height: 100%;
    overflow-y: auto;
    width: 16em;
    -webkit-transform: translateX(16em);
    transform: translateX(16em);

}

.position-right.is-transition-push {
    box-shadow: 0 0 1px 2px #E2E2E2;
}
.off-canvas.is-open {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}

.position-right {
    background-color: white;
    padding: 0 1em;
}

.off-canvas.is-transition-push {
    z-index: 12;
}

.off-canvas {
    position: fixed;
    z-index: 12;
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    transition: transform 0.5s ease, -webkit-transform 0.5s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: #e6e6e6;
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