<template>
    <div>
        <!-- navbar -->
        <nav-bar />

        <!-- login form -->
        <section signup-form>
            <div class="m-auto credential">
                <h4 class="pb-3 font-weight-bolder">Create your account</h4>
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


<style scoped src="../assets/css/Sign.css"></style>