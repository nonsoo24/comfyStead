<template>
    <div>
        <!-- navbar -->
        <nav-bar />

        <!-- login form -->
        <section login-form>
            <div class="m-auto login-credential">
                <h4 class="pb-3 font-weight-bolder">Welcome back</h4>
                <div class="credential-item m-auto">
                    <div class="form-group">
                        <input type="text" id="email" class="form-control p-4 m-auto" placeholder="Email address">
                    </div>

                    <div class="form-group">
                        <input type="password" id="password" class="form-control p-4 m-auto" placeholder="Password">
                    </div>

                    <p class="text-right">Forgot password?</p>
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
