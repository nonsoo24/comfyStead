<template>
    <div>
        <footer>
            <div class="container pt-5 border-bottom">
                <div class="row">

                    <div class="col-md-3 col-lg-3 col-sm-12 mb-3">
                        <h5 class="mb-4 font-weight-bold" data-toggle="collapse" href="#igofer-about" role="button"
                        aria-expanded="false" aria-controls="igofer-about">iGofer <i class="ti-angle-down"></i></h5>

                        <div class="collapse dont-collapse-sm" id="igofer-about">
                        <ul class="list-group">
                            <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> <span>About</span> </a></li>
                            <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> <span>Blog</span> </a></li>
                            <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> <span>Careers</span> </a></li>
                            <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> <span>Press</span> </a></li>
                        </ul>
                        </div>
                    </div>

                    <div class="col-md-9 col-lg-9 col-sm-12">

                        <div class="col-md-3 col-sm-12 col-12 p-0 float-left mb-3">
                            <h5 class="mb-4 font-weight-bold" data-toggle="collapse" href="#igofer-services" role="button"
                        aria-expanded="false" aria-controls="igofer-services">Popular Services  <i class="ti-angle-down"></i></h5>

                        <div class="collapse dont-collapse-sm" id="igofer-services">
                            <ul class="list-group services">
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Carpentry</a></li>
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Cleaning</a></li>
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Fumigation</a></li>
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Installations</a></li>
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Painting</a></li>
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Plumbering</a></li>
                            </ul>
                        </div>
                        </div>


                        <div class="col-md-3 col-sm-12 col-12 p-0 float-left mb-3">
                            <h5 class="mb-4 font-weight-bold" data-toggle="collapse" href="#igofer-support" role="button"
                        aria-expanded="false" aria-controls="igofer-support">Support <i class="ti-angle-down"></i></h5>

                        <div class="collapse dont-collapse-sm" id="igofer-support">
                            <ul class="list-group">
                                <li class="list-group-item border-0 p-0 mb-2"><a href="#">Help</a></li>
                                <li class="list-group-item border-0 p-0 mb-2"><a href="#"> Privacy policy</a></li>
                                <li class="list-group-item border-0 p-0 mb-2"><a href="#">Terms and conditions</a></li>
                            </ul>
                        </div>
                        </div>





                        <div class="col-md-3 col-sm-12 col-12 p-0 mb-3 float-left">
                            <h5 class="mb-4 m font-weight-bold download">Download the app</h5>
                            <div class="d-flex flex-row">
                                <img src="../../assets/img/icons/playstore.svg" alt="playstore" class="pr-2" >
                                <img src="../../assets/img/icons/ios-store.svg" alt="iOs-store" class="d-md-block">
                            </div>

                        </div>

                    </div>
                </div>

                <hr>
                <div>
                    <p class="text-center">&copy; 2019 iGofer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
@font-face {
    font-family: "avenir-next-lt-pro-regular";
    src: url("../../assets/fonts/AvenirNextLTPro-Regular.otf") format("woff"),
        url("../../assets/fonts/AvenirNextLTPro-Regular.otf") format("opentype"),
        url("../../assets/fonts/AvenirNextLTPro-Regular.otf") format("truetype");
}

@font-face {
    font-family: "avenir-next-lt-pro-italic";
    src: url("../../assets/fonts/AvenirNextLTPro-It.otf") format("woff"),
        url("../../assets/fonts/AvenirNextLTPro-It.otf") format("opentype"),
        url("../../assets/fonts/AvenirNextLTPro-It.otf") format("truetype");
}

@font-face {
    font-family: "avenir-next-lt-pro-demi";
    src: url("../../assets/fonts/AvenirNextLTPro-Demi.otf") format("woff"),
        url("../../assets/fonts/AvenirNextLTPro-Demi.otf") format("opentype"),
        url("../../assets/fonts/AvenirNextLTPro-Demi.otf") format("truetype");
}

@font-face {
    font-family: "avenir-next-lt-pro-demi-condensed";
    src: url("../../assets/fonts/AvenirNextLTPro-DemiCn.otf") format("woff"),
        url("../../assets/fonts/AvenirNextLTPro-DemiCn.otf") format("opentype"),
        url("../../assets/fonts/AvenirNextLTPro-DemiCn.otf") format("truetype");
}

@font-face {
    font-family: "avenir-next-lt-pro-bold";
    src: url("../../assets/fonts/AvenirNextLTPro-Bold.otf") format("woff"),
        url("../../assets/fonts/AvenirNextLTPro-Bold.otf") format("opentype"),
        url("../../assets/fonts/AvenirNextLTPro-Bold.otf") format("truetype");
}

@font-face {
    font-family: 'Gilroy-Bold ☞';
    font-style: normal;
    font-weight: normal;
    src: local('Gilroy-Bold ☞'), url('../../assets/fonts/Gilroy-Bold.woff') format('woff');
}

footer {
    background: #F5F5F7 !important;
}

.list-group-item {
    background-color: #F5F5F7 !important;
}


a {
    color: #333456 !important;
    font-weight: 500 !important;
    text-decoration: none !important;
}

a:hover {
    color: #007bff;
    text-decoration: none;
}


img:hover,
svg:hover {
    cursor: pointer;

}



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    h5 {
        font-size: 0.875rem;
        line-height: 1.375rem;
        font-family: "avenir-next-lt-pro-bold";
        font-weight: 500;
        color: #333456 !important;
        margin: 0.9375rem 0rem 0rem 0rem;
        position: relative;
        /* float: left; */
        text-align: left;
    }

    .col-sm-12 {
        margin: 0rem !important;
        padding: 0rem auto !important
    }

    ul li {
        list-style-type: disc;
        margin-left: 0rem;
        padding: 0rem;
        text-align: left;
    }

    li span {
        position: relative;
        left: 0.2rem;
    }

    .services li {
        margin-left: 0.2rem;
    }

    .download {
        font-size: 1.125rem !important;
    }

    .pt-5 {
        padding-top: 1rem !important;
    }

    .ti-angle-down {
        float: right;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    h5 {
        font-size: 0.875rem;
        line-height: 1.5625rem;
        font-family: "avenir-next-lt-pro-bold";
        font-weight: 500;
        color: #333456 !important;
        margin: 0.9375rem 0rem 0rem 0rem;
        position: relative;
        /* float: left; */
        text-align: left;
    }

    .col-sm-12 {
        margin: 0rem !important;
        padding: 0rem auto !important
    }

    ul li {
        list-style-type: disc;
        margin-left: 0rem;
        padding: 0rem;
        text-align: left;
    }

    li span {
        position: relative;
        left: 0.2rem;
    }

    .services li {
        margin-left: 0.2rem;
    }

    .download {
        font-size: 1.125rem !important;
    }

    .pt-5 {
        padding-top: 1rem !important;
    }

    .ti-angle-down {
        float: right;
    }

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .collapse.dont-collapse-sm {
        display: block;
        height: auto !important;
        visibility: visible;
    }

    h5 {
        font-size: 1rem;
        line-height: 1.5625rem;
        font-family: "avenir-next-lt-pro-bold";
        font-weight: 500;
        color: #333456 !important;
        margin-top: 3.625rem;
        text-align: center;
    }

    ul li {
        list-style-type: disc;
        margin-left: 1.5rem;
        padding: 0rem;
        text-align: left;
    }

    li span {
        position: relative;
        left: 1.875rem;
    }

    .services li {
        margin-left: 1.8rem;
    }

    .download {
        font-size: 1rem !important;
    }

    .ti-angle-down {
        float: right;
        display: none;
    }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .collapse.dont-collapse-sm {
        display: block;
        height: auto !important;
        visibility: visible;
    }

    h5 {
        font-size: 1rem;
        line-height: 1.375rem;
        font-family: "avenir-next-lt-pro-bold";
        font-weight: 500;
        color: #333456 !important;
        margin-top: 3.625rem;
        text-align: center;
    }

    ul li {
        list-style-type: disc;
        margin-left: 4.6875rem;
        padding: 0rem;
        text-align: left;
    }

    li span {
        position: relative;
        left: 1.875rem;
    }

    .services li {
        margin-left: 2.5rem;
    }

    .download {
        font-size: 1.4rem !important;
    }

    .ti-angle-down {
        float: right;
        display: none;
    }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .collapse.dont-collapse-sm {
        display: block;
        height: auto !important;
        visibility: visible;
    }

    h5 {
        font-size: 1rem;
        line-height: 1.375rem;
        font-family: "avenir-next-lt-pro-bold";
        font-weight: 500;
        color: #333456 !important;
        margin-top: 3.625rem;
        text-align: center;

    }

    ul li {
        list-style-type: disc;
        margin-left: 4.6875rem;
        padding: 0rem;
        text-align: left;
    }

    li span {
        position: relative;
        left: 1.875rem;
    }

    .services li {
        margin-left: 2.5rem;
    }

    .download {
        font-size: 1.4rem !important;
    }

    .ti-angle-down {
        float: right;
        display: none;
    }

}



.ti-angle-down.active {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    transform: rotate(180deg);
}

</style>