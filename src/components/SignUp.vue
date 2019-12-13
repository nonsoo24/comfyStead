<template>
    <div>
        <!-- navbar -->
        <nav-bar />

        <!-- login form -->
        <section signup-form>
            <div class="m-auto credential">
                <h4 class="pb-3 font-weight-bolder">Create your account</h4>
                <div class="credential-item m-auto">
                    <div>
                        <P>{{responses}}</P>
                    </div>

                    <form @submit.prevent="createUser">

                        <!-- first name -->

                        <div class="form-group" :class="{'invalid': $v.userData.first_name.$error}">
                            <input type="text" id="first-name" class="form-control
                                p-4 m-auto" placeholder="First name" aria-describedby="error-first-name" v-model.lazy="$v.userData.first_name.$model">

                            <p id="error-first-name" class="error" v-if="!$v.userData.first_name.minLength">
                                Name must have at least
                                {{$v.userData.first_name.$params.minLength.min}} characters.
                            </p>

                            <div v-if="$v.userData.first_name.$error">
                                <p id="error-first-name" class="error" v-if="!$v.userData.first_name.required">
                                    First Name is required
                                </p>
                            </div>
                        </div>

                        <!-- last name -->

                        <div class="form-group" :class="{'invalid': $v.userData.last_name.$error}">
                            <input type="text" id="last-name" class="form-control
                                 p-4 m-auto" placeholder="Last name" aria-describedby="error-last-name" v-model.lazy="$v.userData.last_name.$model">

                            <p id="error-last-name" class="error" v-if="!$v.userData.last_name.minLength">
                                Last Name must have at least
                                {{$v.userData.last_name.$params.minLength.min}} characters.
                            </p>

                            <div v-if="$v.userData.last_name.$error">
                                <p  id="error-last-name" class="error" v-if="!$v.userData.last_name.required">
                                    Last Name is required
                                </p>

                            </div>

                        </div>


                        <!-- email address -->

                        <div class="form-group" :class="{'invalid': $v.userData.email.$error}">
                            <input type="text" id="email" class="form-control
                            p-4 m-auto" aria-describedby="error-email" placeholder="Email address" v-model.lazy="$v.userData.email.$model">

                            <p id="error-email" class="error" v-if="!$v.userData.email.email">Please enter a valid email address</p>

                            <div class="error" v-if="$v.userData.email.$error">
                                <p id="error-email"  v-if="!$v.userData.email.required">E-mail is required</p>
                            </div>
                        </div>

                        <!-- phone number -->

                        <div class="form-group" :class="{'invalid': $v.userData.phone_number.$error}">
                            <input type="tel" id="number" class="form-control p-4 m-auto" placeholder="phone number"
                               aria-describedby="error-phone-number" v-model.lazy="$v.userData.phone_number.$model" maxlength="11">

                            <!-- <p id="error-phone-number" class="error" v-if="!$v.userData.phone_number.minLength">Phone number cannot not be more
                                than
                                {{$v.userData.phone_number.params.minLength.min}} digits
                            </p> -->
                             <div v-if="$v.userData.phone_number.$error" class="error">
                                <p id="error-phone-number"  v-if="!$v.userData.phone_number.validPhoneNumber">Phone number must be up to 11 chaacters</p>
                             </div>


                            <div v-if="$v.userData.phone_number.$error">
                                <p  id="error-phone-number" class="error" v-if="!$v.userData.phone_number.required">Phone number is required</p>
                            </div>
                        </div>


                        <!-- password -->

                        <div class="form-group" :class="{'invalid': $v.userData.password.$error}">
                            <input type="password" id="password" class="form-control p-4 m-auto"
                            aria-describedby="error-password" v-model.lazy="$v.userData.password.$model" placeholder="Password">

                        <div v-if="$v.userData.password.$error" class="error">
                             <p id="error-password" v-if="!$v.userData.password.strongPassword">
                                    Password must have 1 lowercase, 1 uppercase, 1 digit and 8 characters long
                            </p>
                        </div>


                            <div v-if="$v.userData.password.$error" class="error">
                                <p id="error-password" class="error"  v-if="!$v.userData.password.required">Password is required</p>
                            </div>
                        </div>

                        <!-- confirm password -->

                        <div class="form-group" :class="{'invalid': $v.userData.confirm_password.$error}">
                            <input type="password" id="confirm-password" class="form-control p-4 m-auto"
                                aria-describedby="error-confirm-password" v-model.lazy="$v.userData.confirm_password.$model" placeholder="Confirm password">

                            <div v-if="$v.userData.confirm_password.$error" class="error">
                                 <p  id="error-confirm-password" v-if="!$v.userData.confirm_password.required">A password confirmation is
                                    required
                                </p>
                            </div>

                            <div v-if="$v.userData.confirm_password.$error" class="error">
                                 <p  id="error-confirm-password"  v-if="!$v.userData.confirm_password.sameAsPassword">
                                     Passwords must be identical
                                </p>
                            </div>
                        </div>

                        <!-- privacy and policy -->

                        <p class="text-center">By clicking Create Account, you agree to the Terms of Use <br> and
                            Privacy and Policy.</p>

                            <!-- login button -->
                            <button class="login-button" @click.prevent="createUser()">
                                <span class="spinner-border m-auto" role="status" aria-hidden="true"></span>
                                <span class="login">Create Account</span>
                            </button>
                            <!-- <button type="submit" class="create-account-button" @click.prevent="createUser"></button> -->


                            <p class="option">OR</p>


                            <!-- login with facebook -->


                            <!-- <fb-signin-button class="m-auto facebook" :params="fbSignInParams" @success="onSignInSuccess"
                                @error="onSignInError">
                                <span>
                                    <img src="/assets/img/facebook.png" alt="facebook" class="mt-0">
                                </span>
                                Sign in with Facebook
                            </fb-signin-button> -->

                            <facebook-login class="button facebook" appId="2599236150111998"
                            @login="onLogin" @logout="onLogout"
                            @sdk-loaded="sdkLoaded">
                            </facebook-login>

                            <!-- login with google -->

                            <div class="m-auto">
                                <GoogleLogin class="google" :params="params" :onSuccess="onSuccess"
                                    :onFailure="onFailure">
                                    <span>
                                        <img src="../assets/img/icons/google.png" alt="google" class="mt-0">
                                    </span>
                                    Sign up with google
                                </GoogleLogin>
                            </div>
                    </form>
                </div>
            </div>
        </section>



        <!-- footer -->
        <the-footer />
    </div>
</template>

<script>
    import axios from 'axios'
    import {
        required,
        minLength,
        maxLength,
        email,
        numeric,
        integer,
        sameAs
    } from 'vuelidate/lib/validators'
    import GoogleLogin from 'vue-google-login';
    import facebookLogin from 'facebook-login-vuejs';
    import NavBar from '../components/HomePage/NavBar.vue'
    import TheFooter from '../components/HomePage/TheFooter.vue';
    export default {
        data() {
            return {
                disabled: false,
                submitStatus: null,
                params: {
                    client_id: "179987126480-jianat2fcsmctuvrh3u5919k4ad6uiug.apps.googleusercontent.com"
                },
                //facebook
                    //   idImage, loginImage, mailImage, faceImage,
                        isConnected: false,
                        name: '',
                        email: '',
                        personalID: '',
                        FB: undefined,

                errors: {},
                responses: '',
                userData: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    password: '',
                    confirm_password: '',
                    // termsAndCondition: false,
                }
            }
        },
        validations: {
            userData: {
                email: {
                    required,
                    email
                },

                first_name: {
                    required,
                    minLength: minLength(3)
                },
                last_name: {
                    required,
                    minLength: minLength(3)
                },
                phone_number: {
                    required,
                    integer,
                    numeric,
                    validPhoneNumber(phone_number) {
                        return /^[0]\d{10}$/.test(phone_number)
                    }
                    // minLength: minLength(11)
                },
                password: {
                    required,
                    strongPassword(password) {
                        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password)

                    }
                },
                confirm_password: {
                    required,
                    sameAsPassword: sameAs('password')
                }
            }

        },

         computed: {
    getButtonText() {
      switch (this.isConnected) {
        case true:
          return this.logoutLabel
        case false:
          return this.loginLabel
        default:
          return 'this is default'
      }
    }
  },
        components: {
            'nav-bar': NavBar,
            'the-footer': TheFooter,
            GoogleLogin,
            facebookLogin
        },


        methods: {

            // signup with google
            onSuccess(googleUser) {
                console.log(googleUser);

                // This only gets the user information: id, name, imageUrl and email
                console.log(googleUser.getBasicProfile());
            },

            onFailure() {

            },

            // signup with facebook
            getUserData() {
                this.FB.api('/me', 'GET', {
                        fields: 'id,name,email'
                    },
                    userInformation => {
                        console.warn("data api", userInformation)
                        this.personalID = userInformation.id;
                        this.email = userInformation.email;
                        this.name = userInformation.name;
                    }
                )
            },
            sdkLoaded(payload) {
                this.isConnected = payload.isConnected
                this.FB = payload.FB
                if (this.isConnected) this.getUserData()
            },
            onLogin() {
                this.isConnected = true
                this.getUserData()
            },
            onLogout() {
                this.isConnected = false;
            },


            // route to new verify email page
            verifyEmail() {
                this.$router.push({
                    path: 'verifyEmail'
                })
            },


            createUser() {

                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    let loader = document.querySelector('.spinner-border');
                    let buttonText = document.querySelector('.login');
                    let loginButton = document.querySelector('.login-button');
                    loader.style.display = 'block'
                    buttonText.style.display = 'none'
                    loginButton.classList.add("Disabled");
                    // alert("hello world")
                    axios.post("/users/register", this.userData, {
                            headers: {
                                'content-type': 'application/json',
                                'Accept': 'application/json'
                            }
                        })
                        .then(response => {
                            loginButton.classList.remove("Disabled");
                            let details = response.data;
                            this.responses = details.msg
                            this.verifyEmail();
                            console.log(this.userData)
                            console.log(response)
                            console.log(response.data)
                            console.log("response", response.data.msg)
                            console.log(this.userData)
                        })
                        .catch(error => {
                            this.loader = false;
                            this.disabled = false;
                            console.log(error.response.data.errors || error.response.data.msg)
                            this.errors = error.response.data.errors;
                            alert(this.errors)
                            console.log(error)
                        })
                }
            }
        }
    }
</script>


<style scoped src="../assets/css/Sign.css"></style>