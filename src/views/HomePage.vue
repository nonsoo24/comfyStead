<template>
    <div>
        <!-- navbar -->
        <nav-bar />

        <!-- side navbar -->
        <side-navbar />

        <main id="main">
            <!-- ======= Slider Section ======= -->
            <section landing-content class="pb-5">
                <div class="carousel carousel-slider center hero-content">
                    <div class="carousel-fixed-item center">
                        <a class="btn waves-effect white grey-text darken-text-2 down-arrow" href="#comfystead-process"><span class="ti-arrow-down "></span></a>
                    </div>
                    <div class="carousel-item white white-text center" :href= item.href
                        v-for="(item, i) in carouselSlider" :key="i">
                        <div class="row">
                            <div class="col-md-6">
                                <h1 class="tagline-header text-dark text-left">{{item.sliderTitle}}</h1>
                                <p class="tagline text-dark text-left">
                                    {{item.sliderBody}}
                                </p>
                            </div>
                            <div class="col-md-6">
                                <div><img class="img-fluid" :src= item.src :alt= item.alt width= item.width
                                        height= item.height></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- services -->
            <!-- <section>
                <div id="exTab1" class="container">
                    <ul class="nav nav-tabs nav-justified">
                        <li class="nav-item">
                            <a class="nav-link" @click.prevent="setActive('cleaning')"
                                :class="{ active: isActive('cleaning') }" href="#cleaning">Cleaning</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click.prevent="setActive('carpentry')"
                                :class="{ active: isActive('carpentry') }" href="#carpentry">Carpentry</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click.prevent="setActive('plumbering')"
                                :class="{ active: isActive('plumbering') }" href="#plumbering">Plumbering</a>
                        </li>

                        <li class="nav-item d-none d-sm-block">
                            <a class="nav-link" @click.prevent="setActive('painting')"
                                :class="{ active: isActive('painting') }" href="#painting">Painting</a>
                        </li>

                        <li class="nav-item d-none d-sm-block">
                            <a class="nav-link" @click.prevent="setActive('fumigation')"
                                :class="{ active: isActive('fumigation') }" href="#fumigation">Fumigation</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" @click.prevent="setActive('more')" :class="{ active: isActive('more') }"
                                href="#more">more
                                <span><img src="../assets/img/icons/arrow2.png" alt="arrow"></span>
                            </a>
                        </li>
                    </ul>



                    <div class="tab-content py-3" id="myTabContent">
                        <div class="tab-pane fade" :class="{ 'active show': isActive('cleaning') }" id="cleaning">


                            <div class="cleaning">
                                <div class="text-left pt-4 pl-5 container">
                                    <img class="pb-2 d-none d-sm-block" src="assets/img/icons/cleaning.png"
                                        alt="cleaning-image">
                                    <p class="text-left text-light">
                                        For all your cleaning services you have in mind and some you haven't thought
                                        of
                                        yet.
                                    </p>
                                </div>

                                <a href="#">
                                    <p class="text-left text-light container pt-5 pl-5">
                                        view all cleaning services
                                        <span>
                                            <img src="assets/img/icons/arrow.png" alt="arrow">
                                        </span>
                                    </p>
                                </a>
                            </div>

                            <div class="row mt-3 services-types">

                                <div v-for="(service, i) in services" :key="i" class="col-md-3 col-sm-6"
                                    @click="TaskDescription">
                                    <img :src="service.image" :alt="service.alt" class="img-responsive">
                                    <h5 class="text-left mb-0 mt-1 font-weight-bolder">{{service.title}}</h5>
                                    <p class="text-left">{{service.total}} professionals</p>
                                </div>
                            </div>

                        </div>


                        <div class="tab-pane fade" :class="{ 'active show': isActive('carpentry') }" id="carpentry">
                            Carpentry
                            content</div>

                        <div class="tab-pane fade" :class="{ 'active show': isActive('plumbering') }" id="plumbering">
                            Plumbering
                            content</div>

                        <div class="tab-pane fade" :class="{ 'active show': isActive('painting') }" id="painting">
                            Painting
                            content</div>

                        <div class="tab-pane fade" :class="{ 'active show': isActive('fumigation') }" id="fumigation">
                            Fumigation
                            content</div>

                        <div class="tab-pane fade" :class="{ 'active show': isActive('more') }" id="more">More
                            content</div>

                    </div>

                </div>
            </section> -->

            <!--  ComfyStead Process -->
            <section get-app id="comfystead-process">
                <div class="get-app-div container">

                    <div class="row">
                        <div class="col-md-7 d-flex align-items-center">
                            <ul class="list-unstyled ui-steps">
                                <li class="media">
                                    <div class="circle-icon mr-4">1</div>
                                    <div class="media-body">
                                        <h5 class="h5account text-left">Choose a Plan</h5>
                                        <p class="text-left">Pick a suitable plan that fits your budget
                                        </p>
                                    </div>
                                </li>
                                <li class="media my-4">
                                    <div class="circle-icon mr-4">2</div>
                                    <div class="media-body">
                                        <h5 class="h5account text-left">Enter contact details and make payment</h5>
                                        <p class="text-left">Provide us with your contact details </p>
                                    </div>
                                </li>
                                <li class="media">
                                    <div class="circle-icon mr-4">3</div>
                                    <div class="media-body">
                                        <h5 class="h5account text-left">Products delivered to your door step </h5>
                                        <p class="text-left">Start working comfortably  </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-5">
                            <img class="img-fluid" src="images/illustrations/register2.webp" alt="iphone">
                        </div>
                    </div>


                </div>
            </section>

            <!-- ======= Packages Section ======= -->
            <section>
                <div class="c-content-box c-no-bottom-padding c-size-md">
                    <div class="container">
                        <div class="row c-margin-t-10 c-margin-b-10">
                            <div class="col-md-12">
                                <div class="c-content-title-1 c-title-pricing-1 text-center">
                                    <h3 class="c-font-uppercase c-font-bold">Packages</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="c-content-pricing-1 c-opt-1">
                                <div class="col-md-2 c-sm-hidden">
                                    <div class="c-content c-column-odd c-padding-adjustment">
                                        <div class="c-row c-type c-font-20 c-align-left">Product Features</div>
                                        <div class="c-row c-title c-font-17" v-for="(item, i) in accessories" :key="i">
                                            {{item}}</div>


                                        <div class="c-row c-empty">&nbsp;</div>
                                        <div class="c-row c-empty">&nbsp;</div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-4" v-for="(item, i) in subscriptionPackage" :key="i">
                                    <div class="c-content c-column-even c-padding-adjustment">
                                        <div class="c-row c-type c-font-20">{{item.planName}}</div>


                                        <div class="c-row" v-for="(item2, i) in accessories" :key="i">

                                            <i class="fa fa-check c-font-20"
                                                v-if="item.accessoryItems.includes(item2)"></i>

                                            <i class="fa fa-times c-font-20" v-else></i>
                                            <span class="c-sub-title"></span>
                                        </div>


                                        <div class="c-row c-price">
                                            <span class="c-dollar c-font-20">₦</span> <span
                                                class="c-font-30 c-font-bold">{{item.price}}</span>
                                        </div>
                                        <div class="c-row c-purchase">
                                            <button class="btn btn-md btn-primary">Select
                                                Plan</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- ======= Testimonials Section ======= -->
            <section class="testimonials mt-5" id="reviews">
                <div class="container">

                    <div class="section-title">
                        <small>TESTIMONIALS</small>
                        <h3>Our Customers love what we do</h3>
                    </div>

                    <div class="owl-carousel testimonials-carousel">

                        <div class="testimonial-item" v-for="(item, i) in customerFeedbacks" :key="i">
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                {{item.comments}}
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img class="testimonial-img" :src= item.src :alt= item.alt>
                            <h3> {{item.name}}</h3>
                            <h4>{{item.position}}</h4>
                        </div>

                    </div>

                </div>
            </section><!-- End Testimonials Section -->

            <!-- ======= Partners Section ======= -->
            <div class="client-logos my-5 mt-3" style="background-color: #F5F5F7;">
                <div class="section-title">
                    <h3 mt-4>Our Partners</h3>
                </div>

                <div class="container text-center">
                    <div id="basicSlider">
                        <div class="MS-content">
                            <div class="item" v-for="(item, i) in partners" :key="i">
                                <a href="#" target="_blank">
                                    <img :src= item.src :alt=item.alt height=item.height :width= item.width>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- become an igofer worker -->
            <!-- <section>
                <div class="row">
                    <div class="d-none d-sm-block d-md-none d-lg-block col-md-12 col-xl-6 col-sm">
                        <img class="become-worker-img" src="/assets/img/homepage/becomeworker.svg"
                            alt="become a worker">
                    </div>
                    <div class="col-md-12 col-xl-6 col-sm">
                        <h4 class="text-left become-worker">Join the pool of professional iGofer workers</h4>
                        <p class="text-left">Whatever work you do, we'll find you the jobs your want.</p>
                        <button class="worker-button">Become an iGofer worker</button>
                    </div>
                </div>
            </section> -->

            <!-- ======= Subscribe Section ======= -->
            <section>
                <div class="subscribe text-center">
                    <h4>Frequently Asked Questions</h4>
                    <!-- <p>Subscribe to our newsletter to be the first to get news on our products</p> -->
                </div>

                <div class="fd-flex col-md-6 mb-5">
                    <!-- <div class="form-group">
                        <input type="text" class="form-control" aria-describedby="emailAddress" placeholder="Enter email address">
                    </div>
                            <button class="btn btn-primary ml-3 mt-1">Subscribe</button> -->
                </div>

            </section>
            <!-- footer -->
            <the-footer />
<a class="back-to-top" href="#"><span class="ti-angle-up"></span></a>
        </main>
    </div>
</template>

<script>
    import NavBar from '../components/HomePage/NavBar.vue';
    import TheFooter from '../components/HomePage/TheFooter.vue';
    import SideNavbar from '../components/HomePage/SideNavbar.vue';
    import {cleaningSubServices} from '../components/Api/Service.js'
   // import { VueFlux, FluxCaption, FluxControls, FluxIndex, FluxPagination, FluxPreloader,} from 'vue-flux';
    //import VueCarousel from '@chenfengyuan/vue-carousel';
    export default {
        data() {
                return {
                    activeItem: 'cleaning',
                    services: [],
                    subService: [],
                    accessories: ["Table", "Chair", "Monitor", "Keyboard", "Mouse", "HDMI", "Cable", "Wall Frames", "Laptop Stand", "Reading Lamp", "Headset/Speaker", "Microphone"],
                    subscriptionPackage: [{
                            planName: 'Basic',
                            price: '29,999',
                            accessoryItems: ["Table", "Chair"]
                        },
                        {
                            planName: 'Classic',
                            price: '99,999',
                            accessoryItems: ["Table", "Chair", "Monitor", "Keyboard", "Mouse", "HDMI", "Cable", "Wall Frames"]
                        },

                        {
                            planName: 'Classic Plus',
                            price: '129,999',
                            accessoryItems: ["Table", "Chair", "Monitor", "Keyboard", "Mouse", "HDMI", "Cable", "Wall Frames", "Laptop Stand", "Reading Lamp", "Headset/Speaker", "Microphone"]
                        },
                        {
                            planName: 'Stylish',
                            price: '119,999',
                            accessoryItems: ["Table", "Chair", "Monitor", "Keyboard", "Mouse", "HDMI", "Cable", "Wall Frames", "Laptop Stand", "Reading Lamp", "Headset/Speaker", "Microphone"]
                        },
                        {
                            planName: 'Vibe',
                            price: '149,999',
                            accessoryItems: ["Table", "Chair", "Monitor", "Keyboard", "Mouse", "HDMI", "Cable", "Wall Frames", "Laptop Stand", "Reading Lamp", "Headset/Speaker", "Microphone"]
                        }
                    ],

                    customerFeedbacks: [{
                            id: '1',
                            src: require('../assets/img/testimonials/Testimonial11.webp'),
                            alt: 'customer-image',
                            name: 'Daniel Chukwurah',
                            position: 'Software Developer',
                            comments: 'One of my biggest challenge is sourcing for quality workspace items. ComfyStead came to the rescue when I needed them most '
                        },


                        {
                            id: '2',
                            src: require('../assets/img/testimonials/Testimonial1.jpg'),
                            alt: 'customer-image',
                            name: 'Laruba Adama',
                            position: 'UI/UX Designer',
                            comments: 'ComfyStead is my number one plug when it comes to setting up my work station, I recommend them anyday anytime'
                        },
                        {
                            id: '3',
                            src: require('../assets/img/testimonials/Testimonial2.jpg'),
                            alt: 'customer-image',
                            name: 'Ngozi Kalu',
                            position: 'Product Owner',
                            comments: 'It was my first time using ComfyStead, their services was awesome. I recommend them'
                        },
                        {
                            id: '4',
                            src: require('../assets/img/testimonials/Testiomial9.webp'),
                            alt: 'customer-image',
                            name: 'Godwin Abidoye',
                            position: 'Graphics Designer',
                            comments: 'The screen on my phone went completely blank. ComfyStead replaced my phone at no cost due to the phone still being under warranty.'
                        },
                        {
                            id: '5',
                            src: require('../assets/img/testimonials/Testiomonial7.webp'),
                            alt: 'customer-image',
                            name: 'Ifeanyi Nnamdi',
                            position: 'Entrepreneur',
                            comments: 'ComfyStead is the best, anytime I lose or break any of my phones they replace them overnight hassle free. My wife and I feel very secure with this platform.'
                        }
                    ],

                    partners: [{
                            id: '1',
                            src: require('../assets/img/partner-logo/aiico.webp'),
                            alt: 'customer-image',
                            height: '80',
                            width: '150'
                        },
                        {
                            id: '2',
                            src: require('../assets/img/partner-logo/leadway.webp'),
                            alt: 'customer-image',
                            height: '80',
                            width: '82'
                        },
                        {
                            id: '3',
                            src: require('../assets/img/partner-logo/slot.webp'),
                            alt: 'customer-image',
                            height: '50',
                            width: '150'
                        },
                        {
                            id: '4',
                            src: require('../assets/img/partner-logo/aiico.webp'),
                            alt: 'customer-image',
                            height: '80',
                            width: '150'
                        },
                        {
                            id: '5',
                            src: require('../assets/img/partner-logo/leadway.webp'),
                            alt: 'customer-image',
                            height: '80',
                            width: '82'
                        }
                    ],
                    carouselSlider: [
                        {
                            id: '1',
                            src: require('../assets/img/illustrations/programmer.svg'),
                            alt: 'slider-image',
                            height: '500',
                            width: '500',
                            sliderTitle: 'Stay Productive Working From Home',
                            sliderBody: ' Replacements, repairs and answers delivered right to you.',
                            href: '#one!'
                        },
                        {
                            id: '2',
                            src: require('../assets/img/illustrations/podcast.svg'),
                            alt: 'slider-image',
                            height: '500',
                            width: '500',
                            sliderTitle: 'Stay Productive Working From Home',
                            sliderBody: ' Replacements, repairs and answers delivered right to you.',
                            href: '#two!'

                        },
                        {
                            id: '3',
                            src: require('../assets/img/illustrations/feeling_proud.svg'),
                            alt: 'slider-image',
                            height: '500',
                            width: '500',
                            sliderTitle: 'Stay Productive Working From Home',
                            sliderBody: ' Replacements, repairs and answers delivered right to you.',
                            href: '#three!'

                        },
                        {
                            id: '4',
                            src: require('../assets/img/illustrations/programmerr.svg'),
                            alt: 'slider-image',
                            height: '400',
                            width: '400',
                            sliderTitle: 'Stay Productive Working From Home',
                            sliderBody: ' Replacements, repairs and answers delivered right to you.',
                            href: '#four!'

                        }
                    ]
                }
            },
            components: {
                'nav-bar': NavBar,
                'the-footer': TheFooter,
                'side-navbar': SideNavbar
            },


            methods: {
                isActive(menuItem) {
                    return this.activeItem === menuItem
                },
                setActive(menuItem) {
                    this.activeItem = menuItem
                },
                TaskDescription() {
                    this.$router.push({
                        path: 'task-description'
                    })
                },

                installOwlCarousel() {
                    $(".owl-carousel").owlCarousel({
                        items: 3,
                        loop: true,
                        mouseDrag: false,
                        touchDrag: false,
                        pullDrag: false,
                        rewind: true,
                        autoplay: true,
                        margin: 0,
                        nav: false,
                        // itemsDesktop : [1199,10],
                        // itemsDesktopSmall : [980,9],
                        // itemsTablet: [768,5],
                        // itemsTabletSmal l: false,
                        // itemsMobile : [479,4]
                    });
                },
                installMaterialCarousel() {
                    $('.carousel').carousel({
                        fullWidth: true,
                        indicators: true,
                        //duration: 2000
                    });
                    //$('.carousel.carousel-slider').carousel();

                    // $('.carousel').slider({full_width: true});//slider init

                },

                setTimer() {
                     setInterval(function(){
                        $('.carousel').carousel('next');
                    }, 7000);
                },

                backToTop() {
                    // Back to top button

                },

                addMultiSlider() {
                    // $('#basicSlider').multislider({
                    //     continuous: true,
                    //     duration: 2000
                    // });
                    $('.item').owlCarousel({
                        items: 4,
                        loop: true,
                        margin: 0,
                        nav: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 3
                            },
                            1000: {
                                items: 5
                            }
                        }
                    })

                }

            },

            created() {
                cleaningSubServices.forEach(service => {
                    this.services.push(service);
                })
            },

            mounted() {

                this.installOwlCarousel()
                this.installMaterialCarousel()
                this.setTimer()
                //this.backToTop()

            }

        }
</script>

<style scoped src="../assets/css/Homepage.css"></style>
