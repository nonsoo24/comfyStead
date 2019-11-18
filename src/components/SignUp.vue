<template>
    <div>
        <!-- navbar -->
        <nav-bar />

        <!-- login form -->
        <section signup-form>
            <div class="m-auto credential">
                <h4 class="pb-3 font-weight-bolder">Create your account</h4>
                <div class="credential-item m-auto">

                    <form @submit.prevent="createUser">

                        <!-- first name -->

                        <div class="form-group" :class="{'invalid': $v.userData.first_name.$error}">
                            <input type="text" id="first-name" class="form-control
                                p-4 m-auto" placeholder="First name" v-model.trim="$v.userData.first_name.$model"
                                autofocus>

                            <p class="error" v-if="!$v.userData.first_name.minLength">
                                Name must have at least
                                {{$v.userData.first_name.$params.minLength.min}} letters.
                            </p>

                            <div v-if="$v.userData.first_name.$error">
                                <p class="error" v-if="!$v.userData.first_name.required">
                                    First Name is required
                                </p>
                            </div>
                        </div>

                        <!-- last name -->

                        <div class="form-group" :class="{'invalid': $v.userData.last_name.$error}">
                            <input type="text" id="last-name" class="form-control
                                 p-4 m-auto" placeholder="Last name" v-model.trim="$v.userData.last_name.$model">

                            <p class="error" v-if="!$v.userData.last_name.minLength">
                                Last Name must have at least
                                {{$v.userData.last_name.$params.minLength.min}} letters.</p>

                            <div v-if="$v.userData.last_name.$error">
                                <p class="error" v-if="!$v.userData.last_name.required">
                                    Last Name is required</p>
                            </div>

                        </div>


                        <!-- email address -->

                        <div class="form-group" :class="{'invalid': $v.userData.email.$error}">
                            <input type="text" id="email" class="form-control
                            p-4 m-auto" placeholder="Email address" v-model.trim="$v.userData.email.$model">

                            <p class="error" v-if="!$v.userData.email.email">Please enter a valid E-mail address</p>

                            <div v-if="$v.userData.email.$error">
                                <p class="error" v-if="!$v.userData.email.required">E-mail is required</p>
                            </div>
                        </div>

                        <!-- phone number -->

                        <div class="form-group" :class="{'invalid': $v.userData.phone_number.$error}">
                            <input type="tel" id="number" class="form-control p-4 m-auto" placeholder="phone number"
                                v-model.trim="$v.userData.phone_number.$model">

                            <p class="error" v-if="!$v.userData.phone_number.minLength">Phone number cannot not be more
                                than
                                {{$v.userData.phone_number.params.minLength.min}} digits
                            </p>

                             <p class="error" v-if="!$v.userData.phone_number.integer">Phone number must be a number/p>


                            <div v-if="$v.userData.phone_number.$error">
                                <p class="error" v-if="!$v.userData.phone_number.required">Phone number is required</p>
                            </div>
                        </div>


                        <!-- password -->

                        <div class="form-group" :class="{'invalid': $v.userData.password.$error}">
                            <input type="password" id="password" class="form-control p-4 m-auto" placeholder="Password">

                            <div v-if="$v.userData.password.$error.strongPassword">
                                <p class="error" v-if="!$v.userData.password.strongPassword">
                                    Password must have 1 lowercase, 1 uppercase, 1 digit and 8 characters long
                                </p>
                            </div>


                            <div v-if="$v.userData.password.$error">
                                <p class="error" v-if="!$v.userData.password.required">Password is required</p>
                            </div>
                        </div>

                        <!-- confirm password -->

                        <div class="form-group" :class="{'invalid': $v.userData.confirm_password.$error}">
                            <input type="password" id="confirm-password" class="form-control p-4 m-auto"
                                placeholder="Confirm password">

                            <p class="error" v-if="!$v.userData.confirm_password.sameAsPassword">
                                Passwords must be identical
                            </p>

                            <div v-if="$v.userData.confirm_password.$error">
                                <p class="error" v-if="!$v.userData.confirm_password.required">This field is
                                    required
                                </p>
                            </div>
                        </div>

                        <!-- privacy and policy -->

                        <p class="text-center">By clicking Create Account, you agree to the Terms of Use <br> and
                            Privacy and Policy.</p>

                            <!-- login button -->
                        <button class="login-button" @click="createUser">Login</button>


                        <p class="option">OR</p>


                        <!-- login with facebook -->

                        <div class="m-auto">
                            <button class="facebook"> <span><img src="/assets/img/facebook.png" alt=""></span> Log in with facebook</button>
                        </div>

                        <!-- login with google -->

                        <div class="m-auto">
                            <button class="google">Log in with google</button>
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

    import NavBar from '../components/HomePage/NavBar.vue'
    import TheFooter from '../components/HomePage/TheFooter.vue';
    export default {
        data() {
            return {
                disabled: false,
                submitStatus: null,
                loader: false,
                errors: {},
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
                    minLength: minLength(11)
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

        components: {
            'nav-bar': NavBar,
            'the-footer': TheFooter
        },

        methods: {

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
                    this.disabled = true;
                    this.loader = true;
                    // alert("hello world")
                    axios.post("/users/register", this.userData, {
                            headers: {
                                'content-type': 'application/json',
                                'Accept': 'application/json'
                            }
                        })
                        .then(response => {
                            this.loader = false;
                            this.verifyEmail();
                            //console.log(this.userData)
                            console.log("response", response.data.msg)
                            //console.log(this.userData)
                        })
                        .catch(error => {
                            this.loader = false;
                            this.disabled = false;
                            console.log(error.response.data.errors || error.response.data.msg)
                            // this.errors = error.response.data.errors;
                            // alert(this.errors)
                            // console.log(error)
                        })
                }
            }
        }
    }
</script>


<style scoped src="../assets/css/Sign.css"></style>