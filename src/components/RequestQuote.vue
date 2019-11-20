<template>
    <div>

        <!-- navbar -->
        <nav-bar />

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
                            <button>Request Quote</button>
                        </div>
                    </div>
                    <p class="card-text text-left review">Being a mother of three boys I know the challenges
                        of keeping clean home, but it has served as great <br> practice for this
                        next step in my life as a Tasker. I am, trustworthy, hard working,
                        diligent and always treat <br> my client's home as if it were my own.
                    </p>
                </div>
            </div>

             <button class=" d-block text-left btn finish-button" @click="completeBooking()"> Finish </button>


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
import {testimonials} from '../components/Api/Testimonial.js'
export default {
    data() {
        return {
            reviews: []
        }
    },
    components: {
        'nav-bar': NavBar,
        'the-footer': TheFooter
    },

    methods: {
         completeBooking(){
            this.$router.push({
                    path: 'complete-booking'
                })
        }
    },

   

    created(){
        testimonials.forEach(review => {
                this.reviews.push(review);
            })

    }

}
</script>

<style scoped>



    .title{
        padding-top: 100px;
        background: #F5F5F7;
        margin: 0px !important;
    }

    button{
        background: #FF6600;
        border-radius: 4px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px !important;
        text-align: center;
        color: #fff !important;
        padding: 13px 44px !important;
        line-height: 19px;
        border: none;
        margin-top: 10px;
    }

    h6{
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        /* float: left; */
        display: block;
    }
    .card, .call-card{
        width: 802px !important;
        background: #FFFFFF !important;
        border: 1px solid #EAEAEA !important;
        box-shadow: 0px 2px 14px rgba(245, 245, 247, 0.5);
        border-radius: 10px;
        margin: auto auto 40px auto !important;
    }

    .call-card{
        margin: -40px auto 40px auto !important;
    }

    .review{
        font-size: 16px;
        color: #333456;
    }

    .profession{
         font-size: 12px !important;
         color: #333456;
         line-height: 14px;
    }
    .title p, .title h3{
        position: relative;
        left: 280px
    }

    .title p{
        padding-bottom: 82px;
    }

    .title h3{
        padding-top: 25px;

    }


    .finish-button{
        border-radius: 4px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px !important;
        text-align: center !important;
        color: #fff !important;
        padding: 19px 20px !important;
        border: none;
        background: #4CAF50;
        box-shadow: 0px 1px 10px rgba(125, 50, 0, 0.25);
        width: 60%;
        margin: auto;

    }


</style>