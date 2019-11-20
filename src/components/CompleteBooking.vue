<template>
    <div>

        <!-- navbar -->
        <nav-bar />

        <section>
            <div class="title">
                <h3 class="text-left pb-3 font-weight-bolder">Complete your Booking</h3>
            </div>
        </section>


        <!-- Complete Booking form -->
        <section>
            <div class="container">

                    <!-- <div class="signup-details  p-5 m-5">
                        <form action="">
                            <p class="text-left">A few more details and we can complete your booking.</p>
                            <div class="form-group">
                                <input type="text" id="first-name" class="form-control" placeholder="First name"
                                    autofocus>
                            </div>

                            <div class="form-group">
                                <input type="text" id="last-name" class="form-control" placeholder="Last name">
                            </div>


                            <div class="form-group">
                                <input type="email" id="email" class="form-control" placeholder="Email address">
                            </div>

                            <div class="form-group">
                                <input type="tel" id="phone-number" class="form-control" placeholder="Phone number">
                            </div>

                            <div class="form-group">
                                <input type="pasword" id="pasword" class="form-control" placeholder="Password">
                            </div>

                            <div class="form-group">
                                <input type="pasword" id="confirm-password" class="form-control"
                                    placeholder="Confirm password">
                            </div>

                            <hr>
                            <p class="text-left mb-0 font-weight-bolder">Payment Information</p>
                            <p class="text-left">You are only charged after your task has been completed and verified by
                                you.</p>

                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Credit card number">
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="appointment" for="expiry-date">Expiry date</label>
                                        <input type="date" id="expiry-date" class="form-control" placeholder="mm/yy">
                                    </div>

                                    <div class="col-md-6">
                                        <label class="appointment" id="cvc-number" for="cvc-number">Security
                                            code</label>
                                        <input type="number" id="cvc-number" class="form-control" placeholder="CVC"
                                            maxlength="3">
                                    </div>
                                </div>
                            </div>

                            <button class="d-block btn m-auto complete-booking-button" @click="completeBooking()">Complete
                                Booking</button>
                        </form>
                    </div> -->



                    <div class="card p-4 m-auto">
                        <div class="card-body">
                            <h5 class="text-left font-weight-bolder pb-4">Booking Summary</h5>
                            <p class="text-left font-weight-bolder task">Cleaning - I want to clean the surroundings of my house</p>
                            <p class="text-left"> <span><img src="../assets/img/icons/date.png" alt="date"></span> 23rd October 2019, 12:45pm</p>
                            <p class="text-left"> <span><img src="../assets/img/icons/map.png" alt="location"></span> 74, Amoo street, Orile-Agege</p>

                            <h5 class="text-left font-weight-bolder pb-1 pt-2">Task Description </h5>
                            <p class="text-left">Being a mother of three boys I know the challenges of <br> keeping clean home,
                                but it has served as great practice for <br> this next step in my life as a Tasker.
                                I am, trustworthy, hard <br> working, diligent and always treat my client's
                                home as if it <br> were my own.
                            </p>

                            <h5 class="text-left font-weight-bolder pt-2">Estimated Budget</h5>
                            <p class="text-left">₦1000 - ₦3000</p>

                            <div>
                                <button class="edit-button">Edit task details</button>
                            </div>
                        </div>
                    </div>

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
export default {
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

}
</script>

<style scoped>


    .title{
        padding-top: 100px;
        background: #F5F5F7;
        margin: 0px !important;
    }

    .signup-details{
        background: #FFFFFF;
        border: 1px solid #EAEAEA;
        box-shadow: 0px 2px 14px rgba(245, 245, 247, 0.5);
        border-radius: 10px;
        width: 60%;
    }


    .complete-booking-button{
        background: #4CAF50;
        box-shadow: 0px 1px 10px rgba(125, 50, 0, 0.25);
        border-radius: 4px;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        padding: 13px 20px !important;
        font-family: 'Poppins', sans-serif;
        width: 100%;
    }


    /* .appointment {
        float: left !important;
    } */

    /* .title p, .title h3{
        position: relative;
        left: 280px
    } */

    /* .title p{
        padding-bottom: 125px !important;
    }

     .signup-details{
        margin: -50px auto 40px auto !important;
    } */

    /* .container {
        margin: auto;
        width: 1090px
    } */

    /* Sign-up */
    /* .signup-details{
        margin: 30px !important;
    } */


    /* Edit booking */
    .card{
        width: 600px !important;
        background: #FFFFFF;
        border: 1px solid #EAEAEA;
        border-radius: 10px;
         margin: -50px auto 40px auto !important;
    }

    .card-body h5:first-child{
        font-size: 24px !important;
    }

    .card-body h5, .task{
        font-size: 18px !important;
    }

    .card-body p{
         font-size: 16px;
    }

    .edit-button{
        background: #FFFFFF;
        border: 2px solid #333456;
        border-radius: 4px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 22px !important;
        text-align: center;
        color: #333456 !important;
        padding: 13px 20px !important;
        line-height: 26px;
        width: 100%;
        margin-top: 39px;
    }

      .title h3{
        padding-top: 10px;
        padding-bottom: 98px !important;
        position: relative;
        left: 380px

    }


</style>