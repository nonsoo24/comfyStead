<template>
    <div>
        <!-- navbar -->
        <nav-bar />

        <!-- login form -->
        <section login-form>
            <div class="m-auto credential">
                <h4 class="pt-5 pb-3 font-weight-bolder">Create your account</h4>
                <div class="credential-item m-auto">
                    <div class="form-group">
                        <input type="text" id="first-name" class="form-control p-4 m-auto" placeholder="First name">
                    </div>

                     <div class="form-group">
                        <input type="text" id="last-name" class="form-control p-4 m-auto" placeholder="Last name">
                    </div>

                     <div class="form-group">
                        <input type="text" id="email" class="form-control p-4 m-auto" placeholder="Email address">
                    </div>

                    <div class="form-group">
                        <input type="password" id="password" class="form-control p-4 m-auto" placeholder="Password">
                    </div>

                     <div class="form-group">
                        <input type="password" id="confirm-password" class="form-control p-4 m-auto" placeholder="Confirm password">
                    </div>

                    <p class="text-center">By clicking Create Account, you agree to the Terms of Use <br> and Privacy and Policy.</p>
                    <button class="login-button">Login</button>
                    <p class="option">OR</p>

                    <div class="m-auto">
                        <button class="facebook">Log in with facebook</button>
                    </div>

                    <div class="m-auto">
                        <button class="google">Log in with google</button>
                    </div>
                </div>
            </div>
        </section>



        <!-- footer -->
        <the-footer />
    </div>
</template>

<script>
    import NavBar from '../components/HomePage/NavBar.vue'
    import TheFooter from '../components/HomePage/TheFooter.vue';
    export default {
        components: {
            'nav-bar': NavBar,
            'the-footer': TheFooter
        }
    }
</script>

<style>

    [login-form] {
        margin-top: 97px;
        margin-bottom: 141px;
    }


    .credential {
        background: #F5F5F7;
        border: 1px solid #EAEAEA;
        border-radius: 4px;
        width: 400px;
        min-height: 750px;
    }

    h4 {
        font-size: 24px;
        margin: 40px 0px 19px 0px;
    }

    input {
        background: #FFFFFF;
        border: 1px solid #EAEAEA;
        border-radius: 4px;
        width: 351px !important;
        margin: auto;
    }

    .login-button{
        cursor: pointer;
        background: #FF6600 !important;
        border-radius: 4px;
        border: 1px solid #FF6600;
        width: 351px;
        padding: 13px 15px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
    }

    .login-button:hover{
        background: #fff !important;
        color: #FF6600;
        border: 1px solid #FF6600;
        font-weight: 600;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);

    }

    .facebook{
        cursor: pointer;
        background: #3558D4 !important;
        border-radius: 4px;
        border: 1px solid #3558D4;
        width: 351px;
        padding: 13px 15px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;

    }

    .google{
        cursor: pointer;
        background: #fff !important;
        border-radius: 4px;
        border: 1px solid #ffffff;
        width: 351px;
        padding: 13px 15px;
        color: #333456;
        font-size: 16px;
        font-weight: 600;
        margin: 25px 0px 25px 0px!important;
    }

    .option{
        margin: 25px 0px 25px 0px
    }
    .text-center{
       font-size: 13px;
       color: #333456;
    }
</style>