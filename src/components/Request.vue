<template>
    <div>

        <!-- navbar -->
        <nav-bar />

        <section class="container">
            <div class="title m-auto ">
                <h3 class="text-left pb-3 font-weight-bolder">What do you need done?</h3>
                <p class="text-left pb-5">Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them.
                    <br>
                    Pay the freelancer only when you are 100% satisfied with the work.
                </p>
            </div>


            <!-- Request form -->
            <div class="request-form p-4 m-auto">
                <div class="d-flex">
                    <img src="" alt="">
                    <h5 class="font-weight-bolder">Cleaning</h5>
                </div>

                <p class="text-left">
                    If you’re in need of home cleaning, office cleaning, or a maid service,
                    we’re simply the best, most <br> convenient home cleaning service out there.
                    We provide you with the cheapest house cleaning <br> available while
                    still having the confidence that you will receive a cleaner who is thorough <br>
                    and professional, with keen attention to detail.
                </p>

                <p class="font-weight-bolder text-left">You can also subscribe to a recurrent cleaning plan for your home or
                    office
                </p>
                <button class=" d-block text-left btn plan-button"> View cleaning plans</button>
            </div>

            <div class="mt-4"></div>

            <div class="request-details m-auto p-5">
                <form action="">
                    <p class="text-left font-weight-bolder mb-0">What do you need done? </p>
                    <p class="text-left pt-0 mt-0">This'll be the title of your task - e.g. Help move my sofa</p>

                    <input type="text">

                    <p class="text-left font-weight-bolder mb-0">What are the details? </p>
                    <p class="text-left pt-0 mt-0">Be as specific as you can about what needs to be done</p>
                    <textarea name="" id="" cols="80" rows="7"></textarea>

                    <p class="text-left font-weight-bolder mb-0">Where do you need it done? </p>
                    <p class="text-left">Choose the location for your task</p>
                    <input type="text">

                    <p class="text-left font-weight-bolder">When would you like us to come? </p>
                    <label class="text-left" for="time">Date</label>
                    <input type="date">

                    <label class="text-left" for="time">Time</label>
                    <input type="time">

                    <p class="text-left font-weight-bolder">Estimated Budget</p>
                    <input type="text" placeholder="₦1000 - ₦3000">

                    <button class="d-block btn m-auto worker-button">View recommended workers</button>
                </form>
            </div>

        </section>

        <!-- footer -->
        <the-footer class="mt-5" />
    </div>
</template>

<script>
import NavBar from '../components/HomePage/NavBar.vue';
import TheFooter from '../components/HomePage/TheFooter.vue';
export default {
    components: {
        'nav-bar': NavBar,
        'the-footer': TheFooter
    }

}
</script>

<style scoped>
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
        width: 70%;
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
    }
</style>