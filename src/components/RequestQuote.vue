<template>
    <div>

        <!-- navbar -->
        <nav-bar />

         <!-- side navbar -->
        <side-navbar />

        <section>
            <div class="title m-auto ">
                <h3 class="text-left pb-3 font-weight-bolder m-auto">Browse through the list of recommended workers
                    around you?</h3>
                <p class="text-left m-auto">Our workers typically reply within an hour. View profiles,
                    ratings, portfolios and chat with them. Pay <br> the worker only when
                    you are 100% satisfied with their work.
                </p>
            </div>
        </section>


        <!-- Request Quote from workers -->
        <section>
            <div class="d-flex call-card m-auto p-1">
                <div class="m-2 pt-2">
                    <img src="../assets/img/icons/warning.png" alt="warning">
                </div>
                <div class="m-2">
                    <p class="text-left">You can request for quotes from as many as 3 workers,
                        but a call out charge of 500 should be <br> paid to a worker
                        for any job that requires inspection.
                    </p>
                </div>
            </div>


            <div class="card m-auto" v-for="(review, i) in reviews" :key="i">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex">
                            <div class="m-2">
                                <img :src="review.image" :alt="review.alt">
                            </div>

                            <div class="m-3">
                                <h6 class="mb-0 text-left">{{review.name}}</h6>
                                <p class="mb-0 text-left review">{{review.profession}}</p>

                                <p class="profession">
                                    <span>
                                        <svg width="100" height="15" viewBox="0 0 100 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 0L10.2804 4.86123L15.6085 5.52786L11.6898 9.1989L12.7023 14.4721L8 11.8797L3.29772 14.4721L4.31016 9.1989L0.391548 5.52786L5.71955 4.86123L8 0Z"
                                                fill="#FFC107" />
                                            <path
                                                d="M29 0L31.2804 4.86123L36.6085 5.52786L32.6898 9.1989L33.7023 14.4721L29 11.8797L24.2977 14.4721L25.3102 9.1989L21.3915 5.52786L26.7196 4.86123L29 0Z"
                                                fill="#FFC107" />
                                            <path
                                                d="M50 0L52.2804 4.86123L57.6085 5.52786L53.6898 9.1989L54.7023 14.4721L50 11.8797L45.2977 14.4721L46.3102 9.1989L42.3915 5.52786L47.7196 4.86123L50 0Z"
                                                fill="#FFC107" />
                                            <path
                                                d="M71 0L73.2804 4.86123L78.6085 5.52786L74.6898 9.1989L75.7023 14.4721L71 11.8797L66.2977 14.4721L67.3102 9.1989L63.3915 5.52786L68.7196 4.86123L71 0Z"
                                                fill="#FFC107" />
                                            <path
                                                d="M92 0L94.2804 4.86123L99.6085 5.52786L95.6898 9.1989L96.7023 14.4721L92 11.8797L87.2977 14.4721L88.3102 9.1989L84.3915 5.52786L89.7196 4.86123L92 0Z"
                                                fill="#EAEAEA" />
                                        </svg>
                                    </span>
                                    {{review.reviewPercentage}}% Positive Reviews | {{review.taskCompleted}} tasks</p>
                            </div>

                        </div>
                        <div>
                            <button id="quote-button" @click="requestQuote()">Request Quote</button>
                            <button id="request-button">
                                <span>
                                    <img src="../assets/img/icons/checkmark.png" alt="checkmark" class="m-2">
                                </span>
                                Quote requested
                            </button>
                        </div>
                    </div>
                    <p class="card-text text-left review">Being a mother of three boys I know the challenges
                        of keeping clean home, but it has served as great <br> practice for this
                        next step in my life as a Tasker. I am, trustworthy, hard working,
                        diligent and always treat <br> my client's home as if it were my own.
                    </p>
                </div>
            </div>

            <button class=" d-block text-left btn finish-button" id="finish-button"> Finish </button>


            <!-- <div class="card m-auto">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex">
                            <div class="m-2">
                                <img src="../assets/img/recommendedWorkers/worker1.jpg" alt="worker1">
                            </div>

                            <div class="m-3">
                                <h6 class="mb-0 text-left">Folajimi James</h6>
                                <p class="mb-0 text-left review">Professional Home Cleaner</p>

                                <p class="profession">
                                    <span>
                                    <svg width="100" height="15" viewBox="0 0 100 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0L10.2804 4.86123L15.6085 5.52786L11.6898 9.1989L12.7023 14.4721L8 11.8797L3.29772 14.4721L4.31016 9.1989L0.391548 5.52786L5.71955 4.86123L8 0Z"
                                            fill="#FFC107" />
                                        <path
                                            d="M29 0L31.2804 4.86123L36.6085 5.52786L32.6898 9.1989L33.7023 14.4721L29 11.8797L24.2977 14.4721L25.3102 9.1989L21.3915 5.52786L26.7196 4.86123L29 0Z"
                                            fill="#FFC107" />
                                        <path
                                            d="M50 0L52.2804 4.86123L57.6085 5.52786L53.6898 9.1989L54.7023 14.4721L50 11.8797L45.2977 14.4721L46.3102 9.1989L42.3915 5.52786L47.7196 4.86123L50 0Z"
                                            fill="#FFC107" />
                                        <path
                                            d="M71 0L73.2804 4.86123L78.6085 5.52786L74.6898 9.1989L75.7023 14.4721L71 11.8797L66.2977 14.4721L67.3102 9.1989L63.3915 5.52786L68.7196 4.86123L71 0Z"
                                            fill="#FFC107" />
                                        <path
                                            d="M92 0L94.2804 4.86123L99.6085 5.52786L95.6898 9.1989L96.7023 14.4721L92 11.8797L87.2977 14.4721L88.3102 9.1989L84.3915 5.52786L89.7196 4.86123L92 0Z"
                                            fill="#EAEAEA" />
                                    </svg>
                                </span>
                                92% Positive Reviews | 211 tasks</p>
                            </div>

                        </div>
                        <div>
                            <button>Request Quote</button>
                        </div>
                    </div>
                    <p class="card-text text-left review">Being a mother of three boys I know the challenges
                        of keeping clean home, but it has served as great <br> practice for this
                        next step in my life as a Tasker. I am, trustworthy, hard working,
                        diligent and always treat <br> my client's home as if it were my own.
                    </p>
                </div>
            </div> -->

        </section>

        <!-- footer -->
        <section>
            <the-footer class="mt-5" />
        </section>
    </div>
</template>

<script>
import NavBar from '../components/HomePage/NavBar.vue';
import TheFooter from '../components/HomePage/TheFooter.vue';
import SideNavbar from '../components/HomePage/SideNavbar.vue';
import {testimonials} from '../components/Api/Testimonial.js'
export default {
    data() {
        return {
            reviews: []
        }
    },
    components: {
        'nav-bar': NavBar,
        'side-navbar': SideNavbar,
        'the-footer': TheFooter
    },

    methods: {
        requestQuote() {
            let userToken = localStorage.getItem('token')
            if (userToken === null) {
                //debugger
                this.$router.push({
                    path: 'signup'
                })
            } else {

                 // axios.post("/users/login", customerRequest)
                //             .then(response => {
                //                 let details = response.data;
                //                 if(details.status= true){
                //                     localStorage.setItem('token', JSON.stringify(details.token))
                //                 }

                //             })
                //             .catch(function (error) {
                //                 console.log(error.response)
                //                 this.msg = error.response.data.msg
                //                 console.log(error.response.data.errors || error.response.data.msg);
                //             })Avenir/tem('TaskDetails')
                if(customerRequest){
                    let requestButton = document.getElementById('request-button');
                    let quoteButton = document.getElementById('quote-button')
                    requestButton.style.display = 'block';
                    quoteButton.style.display ='none'
                }

                // this.$router.push({
                //     path: 'complete-booking'
                // })
            }

        }
    },



    created() {
        testimonials.forEach(review => {
            this.reviews.push(review);
        })

    }

}
</script>

<style scoped>

@font-face {
    font-family: "avenir-next-lt-pro-regular";
    src: url("../assets/fonts/Avenir/AvenirNextLTPro-Regular.otf") format("woff"),
        url("../assets/fonts/Avenir/AvenirNextLTPro-Regular.otf") format("opentype"),
        url("../assets/fonts/Avenir/AvenirNextLTPro-Regular.otf") format("truetype");
}

@font-face {
    font-family: 'Gilroy-Bold ☞';
    font-style: normal;
    font-weight: normal;
    src: local('Gilroy-Bold ☞'), url('../assets/fonts/Gilroy-Bold.woff') format('woff');
}

html{
    font-size: 16px;
    font-family: "avenir-next-lt-pro-regular";
}


    .title{
        padding-top: 6.25rem;
        background: #F5F5F7;
        margin: 0rem !important;
    }

    button{
        background: #FF6600;
        border-radius: 0.25rem;
        font-family: "avenir-next-lt-pro-regular";
        font-style: normal;
        font-weight: 600;
        font-size: 1rem !important;
        text-align: center;
        color: #fff !important;
        padding: 0.8125rem 2.75rem !important;
        line-height: 1.1875rem;
        border: none;
        margin-top: 0.625rem;
        display: visible;
    }

    #request-button{
        border-radius: 0.25rem;
        font-family: "avenir-next-lt-pro-regular";
        font-weight: 600;
        font-size: 1rem !important;
        text-align: center !important;
        color: #333456 !important;
        padding: 0.625rem 1.3125rem !important;
        border: none;
        background: #F5F5F7;
        margin-top: 0.625rem;
        display: none;

    }

    h6{
        font-size: 1.125rem;
        line-height: 1.375rem;
        font-weight: 600;
        font-family: "avenir-next-lt-pro-regular";
        /* float: left; */
        display: block;
    }
    .card, .call-card{
        width: 50.125rem !important;
        background: #FFFFFF !important;
        border: 0.0625rem solid #EAEAEA !important;
        box-shadow: 0rem 0.125rem 0.875rem rgba(245, 245, 247, 0.5);
        border-radius: 0.625rem;
        margin: auto auto 2.5rem auto !important;
    }

    .call-card{
        margin: -2.5rem auto 2.5rem auto !important;
    }

    .review{
        font-size: 1rem;
        color: #333456;
    }

    .profession{
         font-size: 0.75rem !important;
         color: #333456;
         line-height: 0.875rem;
    }
    .title p, .title h3{
        position: relative;
        left: 17.5rem
    }

    .title p{
        padding-bottom: 5.125rem;
    }

    .title h3{
        padding-top: 1.5625rem;
        font-family: 'Gilroy-Bold ☞';

    }


    .finish-button{
        border-radius: 0.25rem;
        font-family: "avenir-next-lt-pro-regular";
        font-style: normal;
        font-weight: 600;
        font-size: 1.125rem !important;
        text-align: center !important;
        color: #fff !important;
        padding: 1.1875rem 1.25rem !important;
        border: none;
        background: #4CAF50;
        box-shadow: 0rem 0.0625rem 0.625rem rgba(125, 50, 0, 0.25);
        width: 60%;
        margin: auto;
    }


</style>