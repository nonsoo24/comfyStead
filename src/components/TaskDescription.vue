<template>
    <div>

        <!-- navbar -->
        <nav-bar />

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
                    we’re simply the best, most <br> convenient home cleaning service out there.
                    We provide you with the cheapest house cleaning <br> available while
                    still having the confidence that you will receive a cleaner who is thorough <br>
                    and professional, with keen attention to detail.
                </p>

                <p class="font-weight-bolder text-left">You can also subscribe to a recurrent cleaning plan for your
                    home or
                    office
                </p>
                <button class=" d-block text-left btn plan-button"> View cleaning plans</button>
            </div>

            <div class="mt-4"></div>

            <div class="request-details m-auto p-5">
                <form action="">
                    <div class="form-group">
                        <p class="text-left font-weight-bolder mb-0">What do you need done? </p>
                        <p class="text-left pt-0 mt-0">This'll be the title of your task - e.g. Help move my sofa</p>

                        <input type="text" class="form-control" autofocus>
                    </div>

                    <div class="form-group">
                        <p class="text-left font-weight-bolder mb-0">What are the details? </p>
                        <p class="text-left pt-0 mt-0">Be as specific as you can about what needs to be done</p>
                        <textarea name="" id="" cols="80" rows="7" class="form-control"></textarea>

                    </div>


                    <div class="form-group">
                        <p class="text-left font-weight-bolder mb-0">Where do you need it done? </p>
                        <p class="text-left">Choose the location for your task</p>
                        <input type="text" class="form-control">
                    </div>

                    <div class="form-group">
                        <p class="text-left font-weight-bolder">When would you like us to come? </p>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="appointment" for="time">Date</label>
                                <input type="date" class="form-control">
                            </div>

                            <div class="col-md-6">
                                <label class="appointment" for="time">Time</label>
                                <input type="time" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <p class="text-left font-weight-bolder">Estimated Budget</p>
                        <input type="text" placeholder="₦1000 - ₦3000" class="form-control">
                    </div>

                    <button class="d-block btn m-auto worker-button" @click="viewRecommendedWorkers()">View recommended workers</button>
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
export default {
    components: {
        'nav-bar': NavBar,
        'the-footer': TheFooter
    },

    methods: {
        viewRecommendedWorkers(){
            this.$router.push({
                    path: 'request-a-quote'
                })
        }
    },

}
</script>

<style scoped>

    html, body {
    margin: 0;
    min-height: 100%;
}

body {
    position: relative; /* needed for the overlay to extend when you scroll */
    /* general styles */
    padding: 30px;
}


    .title{
        padding-top: 100px;
        background: #F5F5F7;
        margin: 0px !important;
    }

    .request-form, .request-details{
        background: #FFFFFF;
        border: 1px solid #EAEAEA;
        box-shadow: 0px 2px 14px rgba(245, 245, 247, 0.5);
        border-radius: 10px;
        width: 60%;
    }

    .request-form img{
        background: #F5F5F7;
        border-radius: 50%;
        width: 3%;
    }

    .plan-button, .worker-button{
        background: #FF6600;
        border-radius: 4px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px !important;
        text-align: center;
        color: #fff !important;
        padding: 13px 20px !important;
        line-height: 19px;
        border: none;
    }

    .worker-button{
        width: 100%;
        font-size: 18px !important;
        padding: 20px !important;
    }

    input, textarea{
        margin-bottom: 62px;
        border: 1px solid #EAEAEA;
    }

    .form-control:focus{
        /* border-color: #FF6600 !important; */
        box-shadow: rgb(255, 102, 0) !important;
    }

    .appointment {
        float: left !important;
    }

    .title p, .title h3{
        position: relative;
        left: 280px
    }

    .title p{
        padding-bottom: 125px !important;
    }

      .request-form{
        margin: -79px auto 40px auto !important;
    }
</style>