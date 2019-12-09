<template>
    <div>
        <footer>
            <div class="container pt-5 border-bottom">
                <div class="row">

                    <div class="col-md-3 col-sm-12 mb-3">
                        <h5 class="mb-4 font-weight-bold">iGofer</h5>
                        <ul class="list-group">
                            <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> <span>About</span> </a></li>
                            <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> <span>Blog</span> </a></li>
                            <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> <span>Careers</span> </a></li>
                            <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> <span>Press</span> </a></li>
                        </ul>
                    </div>

                    <div class="col-md-9 col-sm-12">

                        <div class="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
                            <h5 class="mb-4 font-weight-bold">Popular Services</h5>
                            <ul class="list-group services">
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Carpentry</a></li>
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Cleaning</a></li>
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Fumigation</a></li>
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Installations</a></li>
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Painting</a></li>
                                <li class="list-group-item  border-0 p-0 mb-2"><a href="#"> Plumbering</a></li>
                            </ul>
                        </div>


                        <div class="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
                            <h5 class="mb-4 font-weight-bold">Support</h5>
                            <ul class="list-group">
                                <li class="list-group-item border-0 p-0 mb-2"><a href="#">Help</a></li>
                                <li class="list-group-item border-0 p-0 mb-2"><a href="#"> Privacy policy</a></li>
                                <li class="list-group-item border-0 p-0 mb-2"><a href="#">Terms and conditions</a></li>
                            </ul>
                        </div>





                        <div class="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
                            <h5 class="mb-4 m font-weight-bold">Download the app</h5>
                            <div class="d-flex flex-row">
                                <img src="../../assets/img/icons/playstore.svg" alt="playstore" class="pr-2" >
                                <img src="../../assets/img/icons/ios-store.svg" alt="iOs-store">
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
    footer {
        background: #F5F5F7 !important;
    }

    .list-group-item {
        background-color: #F5F5F7 !important;
    }


    h5 {
        font-size: 1rem;
        line-height: 1.375rem;
        font-family: "Rubik", "Arial", "sans-serif";
        font-weight: 500;
        color: #333456 !important;
        margin-top: 3.625rem;
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
    .services li{
        margin-left: 2.5rem;
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

    img:hover, svg:hover{
        cursor: pointer;

    }
</style>