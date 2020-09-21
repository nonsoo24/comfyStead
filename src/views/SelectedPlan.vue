<template>
    <div>
          <!-- navbar -->
        <nav-bar />

        <!-- side navbar -->
        <side-navbar />

        <div class="card mt-5" style="width: 18rem; float: right; margin-right: 50px; position: relative" v-for="(item, i) in selectedPlan" :key="i">
            <div class="card-header">
            {{item.planName}}
        </div>
            <div class="card-body">
                <ul v-for="(itemm, i) in item.accessoryItems" :key="i">
                    <li>{{itemm}}</li>
                </ul>
            </div>
        </div>

<div class="mt-5">
     <form @submit.prevent="createUser">

            <!-- first name -->

            <div class="form-group">
                <input type="text" id="first-name" class="form-control
                                p-4 m-auto" placeholder="First name" aria-describedby="error-first-name">

                <!-- <p id="error-first-name" class="error" v-if="!$v.userData.first_name.minLength">
                    Name must have at least
                    {{$v.userData.first_name.$params.minLength.min}} characters.
                </p>

                <div v-if="$v.userData.first_name.$error">
                    <p id="error-first-name" class="error" v-if="!$v.userData.first_name.required">
                        First Name is required
                    </p>
                </div> -->
            </div>

            <!-- last name -->

            <div class="form-group">
                <input type="text" id="last-name" class="form-control
                                 p-4 m-auto" placeholder="Last name" aria-describedby="error-last-name">

                <!-- <p id="error-last-name" class="error" v-if="!$v.userData.last_name.minLength">
                    Last Name must have at least
                    {{$v.userData.last_name.$params.minLength.min}} characters.
                </p>

                <div v-if="$v.userData.last_name.$error">
                    <p id="error-last-name" class="error" v-if="!$v.userData.last_name.required">
                        Last Name is required
                    </p>

                </div> -->

            </div>


            <!-- email address -->

            <div class="form-group">
                <input type="text" id="email" class="form-control
                            p-4 m-auto" aria-describedby="error-email" placeholder="Email address">

                <!-- <p id="error-email" class="error" v-if="!$v.userData.email.email">Please enter a valid email address</p>

                <div class="error">
                    <p id="error-email">E-mail is required</p>
                </div> -->
            </div>

            <!-- phone number -->

            <div class="form-group">
                <input type="tel" id="number" class="form-control p-4 m-auto" placeholder="phone number"
                    aria-describedby="error-phone-number">
                <!-- <div v-if="$v.userData.phone_number.$error" class="error">
                    <p id="error-phone-number" v-if="!$v.userData.phone_number.validPhoneNumber">Phone number must be up
                        to 11 chaacters</p>
                </div>


                <div v-if="$v.userData.phone_number.$error">
                    <p id="error-phone-number" class="error" v-if="!$v.userData.phone_number.required">Phone number is
                        required</p>
                </div> -->
            </div>

             <!-- Closest Landmark -->

            <div class="form-group">
                <input type="text" id="landmark" class="form-control p-4 m-auto" placeholder="Closest Landmark"
                    aria-describedby="error-landmark">

                <!-- <div v-if="$v.userData.phone_number.$error" class="error">
                    <p id="error-phone-number" v-if="!$v.userData.phone_number.validPhoneNumber">Phone number must be up
                        to 11 chaacters</p>
                </div>


                <div v-if="$v.userData.phone_number.$error">
                    <p id="error-phone-number" class="error" v-if="!$v.userData.phone_number.required">Phone number is
                        required</p>
                </div> -->
            </div>



            <!-- Address -->

            <div class="form-group">
               <!-- <textarea id="address" name="address" rows="3" cols="40" class="form-control  p-4 m-auto" placeholder="Shipping Address"></textarea> -->

                <!-- <div v-if="$v.userData.password.$error" class="error">
                    <p id="error-password" v-if="!$v.userData.password.strongPassword">
                        Password must have 1 lowercase, 1 uppercase, 1 digit and 8 characters long
                    </p>
                </div>


                <div v-if="$v.userData.password.$error" class="error">
                    <p id="error-password" class="error" v-if="!$v.userData.password.required">Password is required</p>
                </div> -->
            </div>

            <!-- confirm password -->

            <!-- <div class="form-group" :class="{'invalid': $v.userData.confirm_password.$error}">
                <input type="password" id="confirm-password" class="form-control p-4 m-auto"
                    aria-describedby="error-confirm-password" v-model.lazy="$v.userData.confirm_password.$model"
                    placeholder="Confirm password">

                <div v-if="$v.userData.confirm_password.$error" class="error">
                    <p id="error-confirm-password" v-if="!$v.userData.confirm_password.required">A password confirmation
                        is
                        required
                    </p>
                </div>

                <div v-if="$v.userData.confirm_password.$error" class="error">
                    <p id="error-confirm-password" v-if="!$v.userData.confirm_password.sameAsPassword">
                        Passwords must be identical
                    </p>
                </div>
            </div> -->

            <!-- privacy and policy -->

            <!-- <p class="text-center">By clicking Submit, you agree to the Terms of Use <br> and
                Privacy and Policy.</p>

                 <p class="text-center">Yes, I agree to the terms and condition</p>
                 <p class="text-center">Yes, I will like to subscribe your newsletter</p> -->

            <!-- login button -->
            <div class="text-center mb-5">
                <button class="login-button" @click.prevent="createUser()">
                    <!-- <span class="spinner-border m-auto" role="status" aria-hidden="true"></span> -->
                    <span class="login">Submit</span>
                </button>
            </div>


        </form>
</div>

        <!-- footer -->
        <the-footer />
    </div>
</template>

<script>
 import NavBar from '../components/HomePage/NavBar.vue';
 import TheFooter from '../components/HomePage/TheFooter.vue';
 import SideNavbar from '../components/HomePage/SideNavbar.vue';
export default {
    data() {
            return {
                accessories: ["Table", "Chair", "Monitor", "Keyboard", "Mouse", "HDMI", "Cable", "Wall Frames", "Laptop Stand", "Reading Lamp", "Headset/Speaker", "Microphone"],
                selectedPlan: [],
                subscriptionPackage: [{
                        id: '1',
                        planName: 'Basic',
                        price: '29,999',
                        accessoryItems: ["Table", "Chair"]
                    },
                    {
                        id: '2',
                        planName: 'Classic',
                        price: '99,999',
                        accessoryItems: ["Table", "Chair", "Monitor", "Keyboard", "Mouse", "HDMI", "Cable", "Wall Frames"]
                    },

                    {
                        id: '3',
                        planName: 'Classic Plus',
                        price: '129,999',
                        accessoryItems: ["Table", "Chair", "Monitor", "Keyboard", "Mouse", "HDMI", "Cable", "Wall Frames", "Laptop Stand", "Reading Lamp", "Headset/Speaker", "Microphone"]
                    },
                    {
                        id: '4',
                        planName: 'Stylish',
                        price: '119,999',
                        accessoryItems: ["Table", "Chair", "Monitor", "Keyboard", "Mouse", "HDMI", "Cable", "Wall Frames", "Laptop Stand", "Reading Lamp", "Headset/Speaker", "Microphone"]
                    },
                    {
                        id: '5',
                        planName: 'Vibe',
                        price: '149,999',
                        accessoryItems: ["Table", "Chair", "Monitor", "Keyboard", "Mouse", "HDMI", "Cable", "Wall Frames", "Laptop Stand", "Reading Lamp", "Headset/Speaker", "Microphone"]
                    }
                ]
            }
        },
        components: {
            'nav-bar': NavBar,
            'the-footer': TheFooter,
            'side-navbar': SideNavbar
        },

        methods: {
            getPlanById() {
                //get plan id from URL
                let planId = this.$route.params.id;
                let subPackage = this.subscriptionPackage.filter((newId, index) => {
                    return (newId.id == planId)
                })

                 this.selectedPlan.push(subPackage[0])
               console.log(subPackage[0])
                //console.log(planId)
            }
        },
        mounted() {

            this.getPlanById()

        },
    }
</script>

<style scoped src="../assets/css/Sign.css"></style>