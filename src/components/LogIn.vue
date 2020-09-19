<template>
    <div>
        <!-- navbar -->
        <nav-bar />

        <!-- side navbar -->
        <side-navbar />

        <!-- login form -->
        <section login-form>
            <div class="m-auto login-credential">
                <h4 class="pb-3 font-weight-bolder">Welcome back</h4>

                <form @submit.prevent="login">
                    <div v-if="!msg">{{msg}}</div>
                    <div class="credential-item m-auto">

                        <!-- email address -->
                        <div class="form-group" :class="{'invalid': $v.loginDetails.email.$error}">
                            <input type="text" id="email" class="form-control p-4 m-auto" placeholder="Email address"
                                autofocus v-model="loginDetails.email">

                                <!-- email address error message -->
                            <div v-if="$v.loginDetails.email.$error">
                                <p class="error" v-if="!$v.loginDetails.email.required">E-mail is required</p>
                            </div>
                            <p class="error" v-if="!$v.loginDetails.email.email">Invalid Email Address</p>
                        </div>

                        <!-- password -->
                        <div class="form-group" :class="{'invalid': $v.loginDetails.password.$error}">
                            <input type="password" id="password" class="form-control p-4 m-auto" placeholder="Password"
                                v-model="loginDetails.password">

                                 <!-- password error message -->
                            <div v-if="$v.loginDetails.password.$error">
                                <p class="error" v-if="!$v.loginDetails.password.required">
                                    Password is required
                                </p>
                            </div>
                        </div>

                        <a href="#">Forgot password?</a>
                        <!-- <router-link  >Forgot password?</router-link> -->

                        <!-- buttons -->
                        <button class="login-button" type="submit" @click.prevent="login">
                                <span class="spinner-border m-auto" role="status" aria-hidden="true"></span>
                                <span class="login">Login</span>
                        </button>
                        <p class="option">OR</p>


                        <!-- <div class="m-auto">
                            <button class="facebook" type="submit"><span><img src="/assets/img/facebook.png" alt="facebook" class="mt-0"></span> Log in with facebook</button>
                        </div> -->

                        <div class="m-auto">
                            <button class="google" type="submit">
                                 <span>
                                    <img src="../assets/img/icons/google.png" alt="google" class="mt-0">
                                </span> Log in with google
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>



        <!-- footer -->
        <the-footer />
    </div>
</template>

<script>
    import axios from 'axios'
    import NavBar from '../components/HomePage/NavBar.vue'
    import SideNavbar from '../components/HomePage/SideNavbar.vue';
    import TheFooter from '../components/HomePage/TheFooter.vue';
    import {required, email} from 'vuelidate/lib/validators'
    export default {
        data() {
            return {

                submitStatus: null,
                // disablebutton: false,
                // disabled: false,
                //loader: false,
                msg: "",
                errors: {},
                loginDetails: {
                    email: '',
                    password: ''

                }
            }

        },

        components: {
            'nav-bar': NavBar,
            'side-navbar': SideNavbar,
            'the-footer': TheFooter
        },


        validations: {
            loginDetails: {
                email: {
                    required,
                    email
                },

                password: {
                    required,
                }
            }
        },


        methods: {

            userDashboard() {
                this.$router.push({
                    path: 'customer'
                })

            },
            login() {

                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    //debugger
                   let loader = document.querySelector('.spinner-border');
                   let buttonText = document.querySelector('.login');
                   let loginButton = document.querySelector('.login-button');
                   loader.style.display = 'block'
                   buttonText.style.display = 'none'
                   loginButton.classList.add("Disabled");



                    axios.post("/users/login", this.loginDetails)
                        .then(response => {
                            // debugger
                            let details = response.data;
                            //if (details.status = true) {
                                localStorage.setItem('token', JSON.stringify(details.token))
                           // }

                            //console.log(details)
                            this.userDashboard();
                        })
                        .catch(function (error) {
                            //debugger
                            console.log(error.response)
                            this.msg = error.response.data.msg
                            // handle error
                            console.log(error.response.data.errors || error.response.data.msg);
                        })
                }
            }
        }

    }

</script>


<style scoped src="../assets/css/Sign.css"></style>
