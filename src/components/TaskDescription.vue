<template>
    <div>

        <!-- navbar -->
        <nav-bar />

        <!-- side navbar -->
        <side-navbar />

        <section>
            <div class="title m-auto ">
                <h3 class="text-left pb-3 font-weight-bolder m-auto">What do you need done?</h3>
                <p class="text-left m-auto">Contact skilled freelancers within minutes. View profiles, ratings,
                    portfolios and chat with them.
                    <br>
                    Pay the freelancer only when you are 100% satisfied with the work.
                </p>
            </div>
        </section>


        <!-- Task description form -->
        <section>
            <div class="request-form pt-2 pl-5 pb-4 m-auto">
                <div class="d-flex">
                    <img src="assets/img/icons/cleaning3.svg" class="m-3" alt="cleaning">
                    <h5 class="font-weight-bolder m-3">Cleaning</h5>
                </div>

                <p class="text-left">
                    If you’re in need of home cleaning, office cleaning, or a maid service,
                    we’re simply the best, most convenient home cleaning service out there.
                    We provide you with the cheapest house cleaning available while
                    still having the confidence that you will receive a cleaner who is thorough
                    and professional, with keen attention to detail.
                </p>

                <p class="font-weight-bolder text-left">You can also subscribe to a recurrent cleaning plan for your
                    home or
                    office
                </p>
                <button class=" d-block text-left btn plan-button"> View cleaning plans</button>
            </div>

            <div class="mt-4"></div>

            <!-- Task description form -->
            <div class="request-details m-auto p-5">
                <form action="">
                    <div class="form-group" :class="{ invalid: $v.bookingSummary.task.$error}">
                        <p class="text-left font-weight-bolder mb-0">What do you need done? </p>
                        <p class="text-left pt-0 mt-0">This'll be the title of your task - e.g. Help move my sofa</p>

                        <input type="text" class="form-control" v-model.lazy="$v.bookingSummary.task.$model"
                            aria-describedby="task-error">

                        <!-- validation error -->
                        <div v-if="$v.bookingSummary.task.$error" class="error">
                            <p v-if="!$v.bookingSummary.task.required" id="task-error">Please enter the title of your task</p>
                        </div>
                    </div>

                    <div class="form-group" :class="{ invalid: $v.bookingSummary.taskDescription.$error}">
                        <p class="text-left font-weight-bolder mb-0">What are the details? </p>
                        <p class="text-left pt-0 mt-0">Be as specific as you can about what needs to be done</p>
                        <textarea name="task-description" id="" cols="80" rows="7" class="form-control"
                            v-model.lazy="$v.bookingSummary.taskDescription.$model"
                            aria-describedby="task-error"></textarea>

                        <!-- validation error -->
                        <div v-if="$v.bookingSummary.taskDescription.$error" class="error">
                            <p v-if="!$v.bookingSummary.taskDescription.required" id="taskDescription-error">Task
                                description is should be at least
                                {{$v.bookingSummary.taskDescription.$params.minLength.min}} characters
                            </p>
                        </div>

                        <div v-if="$v.bookingSummary.taskDescription.$error" class="error">
                            <p v-if="!$v.bookingSummary.taskDescription.required" id="taskDescription-error">Please
                                describe your task</p>
                        </div>

                    </div>


                    <div class="form-group" :class="{ invalid: $v.bookingSummary.location.$error}">
                        <p class="text-left font-weight-bolder mb-0">Where do you need it done? </p>
                        <p class="text-left">Choose the location for your task</p>

                        <input type="text" class="form-control" v-model.lazy="$v.bookingSummary.location.$model"
                            aria-describedby="location-error">

                        <!-- validation error -->

                        <div v-if="$v.bookingSummary.location.$error" class="error">
                            <p v-if="!$v.bookingSummary.location.required" id="location-error">Please enter your
                                Location
                            </p>
                        </div>
                    </div>

                    <div class="form-group">
                        <p class="text-left font-weight-bolder">When would you like us to come? </p>
                        <div class="row">
                            <div class="col-md-6" :class="{ invalid: $v.bookingSummary.date.$error}">
                                <label class="appointment d-block" for="date">Date</label>


                                      <date-picker v-model="bookingSummary.date" lang="en" type="date" format="d-MMM-YYYY"
                                      :disabledDates='bookingSummary.disabledDates'> </date-picker>
                                    <!-- <input type="date" class="form-control" id="date"
                                        v-model.lazy="$v.bookingSummary.date.$model" aria-describedby="date-error"> -->


                                <!-- validation error -->

                                <div v-if="$v.bookingSummary.date.$error" class="error">
                                    <p v-if="!$v.bookingSummary.date.required" id="date-error">Please enter a convenient
                                        date
                                    </p>
                                </div>
                            </div>



                            <div class="col-md-6" :class="{ invalid: $v.bookingSummary.time.$error}">
                                <label class="appointment" for="time">Time</label>
                                <!-- <input type="time" id="time" class="form-control"
                                    v-model.lazy="$v.bookingSummary.time.$model" aria-describedby="time-error"> -->

                                    <date-picker v-model="bookingSummary.time" lang="en" type="time" :format="'hh:mm a'"
                                     :timePickerOptions='bookingSummary.timePickerOptions'></date-picker>


                                <!-- validation error -->
                                <div v-if="$v.bookingSummary.time.$error" class="error">
                                    <p v-if="!$v.bookingSummary.time.required" id="time-error">Please
                                        enter a convenient time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group" :class="{ invalid: $v.bookingSummary.estimatedBudget.$error}">
                        <p class="text-left font-weight-bolder">Estimated Budget</p>
                        <input type="text" placeholder="₦1000 - ₦3000" class="form-control"
                            v-model.lazy="$v.bookingSummary.estimatedBudget.$model"
                            aria-describedby="estimatedBudget-error">

                        <!-- validation error -->
                        <div v-if="$v.bookingSummary.estimatedBudget.$error" class="error">
                            <p v-if="!$v.bookingSummary.estimatedBudget.required" id="estimatedBudget-error">Please
                                enter an estimate
                            </p>
                        </div>
                    </div>

                    <button class="d-block btn m-auto worker-button" @click.prevent="viewRecommendedWorkers()">View recommended
                        workers</button>
                </form>
            </div>

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
import axios from 'axios'
//import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import {
    required,
    minLength,
    maxLength,
    numeric,
    integer,
    sameAs
} from 'vuelidate/lib/validators'
export default {
    data() {
        return {

            uiState: "submit not clicked",
            FormErrors: false,
            formTouched: false,
            submitStatus: null,
            empty: true,
            bookingSummary: {
                task: '',
                taskDescription: '',
                date: '',
                timePickerOptions: {
                    start: '08:00',
                    step:'00:30' ,
                    end: '17:00'
                },
                 disabledDates: {
                     to: new Date(Date.now() - 8640000)
                },

                // disabledDate: function(date) {
                //  disables the date if it is a multiple of 5
                // if(date.getDate() % 5 == 0){
                //     return true
                // }
                // },
                location: '',
                estimatedBudget: ''

            }

        }
    },

    validations: {
        bookingSummary: {
            task: {
                required
            },
            taskDescription: {
                required,
                minLength: minLength(10)
            },
            date: {
                required
            },
            time: {
                required
            },
            location: {
                required
            },
            estimatedBudget: {
                required
            }

        }
    },

    components: {
        'nav-bar': NavBar,
        'the-footer': TheFooter,
        'side-navbar': SideNavbar
    },

    methods: {
        viewRecommendedWorkers() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR';

            } else {
                localStorage.setItem('TaskDetails', JSON.stringify(this.bookingSummary));

                this.$router.push({
                    path: 'request-a-quote'
                })

            }

        }

    },
    mounted() {
        // let dateIcon = document.querySelectorAll('.mx-icon-calendar')
        // dateIcon.style.display ='none'
        $('.mx-icon-calendar').each(function () {
            //console.log($(this))
            $(this).hide();
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

    html, body {
        margin: 0;
        min-height: 100%;
        font-size: 16px;
        font-family: "avenir-next-lt-pro-regular";
    }

    body {
        position: relative;
        /* needed for the overlay to extend when you scroll */
        /* general styles */
        padding: 1.875rem;
    }


    .title {
        padding-top: 6.25rem;
        background: #F5F5F7;
        margin: 0rem !important;
    }

    .request-form,
    .request-details {
        background: #FFFFFF;
        border: 1px solid #EAEAEA;
        box-shadow: 0rem 0.125rem 0.875rem rgba(245, 245, 247, 0.5);
        border-radius: 0.625rem ;
        width: 60%;
    }

    .request-form img {
        background: #F5F5F7;
        border-radius: 50%;
        width: 3%;
    }

    .plan-button,
    .worker-button {
        background: #FF6600;
        border-radius: 0.25rem;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 1rem !important;
        text-align: center;
        color: #fff !important;
        padding: 0.8125rem 1.25rem !important;
        line-height: 1.1875rem;
        border: none;
    }

    .worker-button {
        width: 100%;
        font-size: 1.125rem !important;
        padding: 1.25rem !important;
    }

    input,
    textarea {
        margin-bottom: 1.875rem;
        /* border: 1px solid #FF6600; */
    }

    /* .text-left{
        margin-top: 62px;
    } */

    .form-control:focus {
        /* border-color: #FF6600 !important; */
        box-shadow: none !important;
        border: 0.0625rem solid #EAEAEA;
    }

    .appointment {
        float: left !important;
    }

    .title p,
    .title h3 {
        position: relative;
        left: 17.5rem
    }

    .title p {
        padding-bottom: 7.8125rem !important;
    }

    .title h3 {
        padding-top: 1.5625rem;
        font-family: 'Gilroy-Bold ☞';
    }

    .request-form {
        margin: -4.9375rem auto 2.5rem auto !important;
    }

    /* validation error styling */
    .form-group.invalid input {
        /* background-color: #ffc9aa; */
        border: 1px solid #FF6600;
        margin-bottom: 0rem !important;
        padding-bottom: 0rem !important;
    }

    .error {
        color: #FF6600;
    }


    /* date picker */
    .mx-datepicker svg {
    width: 2rem !important;
    height: 1rem;
    vertical-align: 2rem !important;
    fill: currentColor;
    overflow: hidden;
    display: none !important;
}


.mx-datepicker {
    position: relative;
    display: block;
    width: 100%;
}

.mx-icon-calendar, .mx-icon-clear {
    position: absolute;
    top: 70% !important;
    bottom: 70% !important;
    /* display: none; */
    right: 0.5rem;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1rem;
    line-height: 1;
    color: rgba(0,0,0,.5);
    vertical-align: middle;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .title p, .title h3 {
    position: relative;
    left: 1.5rem;
}
    .title p {
        font-size: 0.8rem;
    }
    .request-form{
        width: 100%;
        margin: -4.9375rem 0rem 0rem 0rem !important;

    }
    .request-details{
        width: 100%;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
</style>