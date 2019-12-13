<template>
    <div>
        <!-- navbar -->
        <nav-bar />

        <!-- landing page picture -->
        <section landing-content>
            <div class="landing-picture">
                <h2 banner-text>A convenient and affordable way to get things done</h2>
                <p class="word">Choose from a pool of iGofer trained and verified professionals to get your
                    job done.
                </p>
            </div>

            <!-- services display -->
            <div class="advert d-flex flex-row">
                <div class="service" >
                    <img src="../assets/img/icons/cleaning.png" alt="cleaning">
                    <p>Cleaning</p>
                </div>
                <div class="service">
                     <img src="../assets/img/icons/carpentery.png" alt="cleaning">
                    <p class="">Carpentry</p>
                </div>
                <div class="service">
                     <img src="../assets/img/icons/plumbering.png" alt="cleaning">
                    <p>Plumbing</p>
                </div>
                <div class="service">
                    <img src="../assets/img/icons/painting.png" alt="painting">
                    <p>Painting</p>
                </div>
                <div class="service">
                     <img src="../assets/img/icons/fumigation.png" alt="cleaning">
                    <p>Fumigation</p>
                </div>
                <div class="arrow">
                     <img src="../assets/img/icons/arrow3.png" alt="arrow">
                </div>
            </div>
        </section>


        <!-- how it works -->
        <section class="container" how-it-works>
            <!-- <h4>How it works</h4> -->
            <div class="row">
                <div class="col-md-4">
                    <svg width="100" height="100" viewBox="0 -5 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.2704 0H0.729922C0.399863 0 0.132324 0.267539 0.132324 0.597598V29.4024C0.132324 29.7325 0.399863 30 0.729922 30H16.3488C16.5073 30 16.6593 29.937 16.7714 29.825L21.6931 24.9032C21.8051 24.7912 21.8681 24.6392 21.8681 24.4806V0.597598C21.8681 0.267539 21.6005 0 21.2704 0ZM16.9453 27.9608L16.9427 25.0746L19.8288 25.0772L16.9453 27.9608ZM20.6729 23.8828L16.345 23.8788C16.3449 23.8788 16.3447 23.8788 16.3445 23.8788C16.186 23.8788 16.034 23.9418 15.9219 24.0538C15.8097 24.1661 15.7467 24.3183 15.7469 24.477L15.7508 28.8048H1.32752V1.1952H20.6729V23.8828Z"
                            fill="#333456" fill-opacity="0.7" />
                        <path
                            d="M7.38106 5.02708C7.14769 4.7937 6.76929 4.7937 6.53591 5.02714L4.77722 6.78583L4.34052 6.34907C4.10714 6.11569 3.72875 6.11569 3.49537 6.34907C3.26199 6.58245 3.26193 6.96084 3.49537 7.19422L4.35459 8.0535C4.46662 8.16553 4.61867 8.22852 4.77716 8.22852C4.93566 8.22852 5.08765 8.16553 5.19974 8.0535L7.38101 5.87223C7.61438 5.63891 7.61438 5.26046 7.38106 5.02708Z"
                            fill="#333456" fill-opacity="0.7" />
                        <path
                            d="M18.082 6.21826H17.8725C17.5424 6.21826 17.2749 6.4858 17.2749 6.81586C17.2749 7.14592 17.5424 7.41346 17.8725 7.41346H18.082C18.4121 7.41346 18.6796 7.14592 18.6796 6.81586C18.6796 6.4858 18.4121 6.21826 18.082 6.21826Z"
                            fill="#333456" fill-opacity="0.7" />
                        <path
                            d="M15.9603 6.21826H9.26898C8.93893 6.21826 8.67139 6.4858 8.67139 6.81586C8.67139 7.14592 8.93893 7.41346 9.26898 7.41346H15.9603C16.2903 7.41346 16.5579 7.14592 16.5579 6.81586C16.5579 6.4858 16.2903 6.21826 15.9603 6.21826Z"
                            fill="#333456" fill-opacity="0.7" />
                        <path
                            d="M7.38106 10.8122C7.14769 10.5789 6.76929 10.5789 6.53591 10.8123L4.77722 12.571L4.34052 12.1342C4.10714 11.9008 3.72875 11.9008 3.49537 12.1342C3.26199 12.3676 3.26193 12.746 3.49537 12.9794L4.35459 13.8387C4.46662 13.9507 4.61867 14.0137 4.77716 14.0137C4.93566 14.0137 5.08765 13.9507 5.19974 13.8387L7.38101 11.6574C7.61438 11.4241 7.61438 11.0457 7.38106 10.8122Z"
                            fill="#333456" fill-opacity="0.7" />
                        <path
                            d="M18.0823 12.0034H9.26899C8.93893 12.0034 8.67139 12.271 8.67139 12.601C8.67139 12.9311 8.93893 13.1986 9.26899 13.1986H18.0823C18.4123 13.1986 18.6799 12.9311 18.6799 12.601C18.6799 12.271 18.4123 12.0034 18.0823 12.0034Z"
                            fill="#333456" fill-opacity="0.7" />
                        <path
                            d="M7.38106 16.5793C7.14769 16.3459 6.76929 16.3459 6.53591 16.5794L4.77722 18.3381L4.34052 17.9013C4.10714 17.6679 3.72875 17.6679 3.49537 17.9013C3.26199 18.1347 3.26193 18.5131 3.49537 18.7465L4.35459 19.6058C4.46662 19.7178 4.61867 19.7808 4.77716 19.7808C4.93566 19.7808 5.08765 19.7178 5.19974 19.6058L7.38101 17.4245C7.61438 17.1912 7.61438 16.8128 7.38106 16.5793Z"
                            fill="#333456" fill-opacity="0.7" />
                        <path
                            d="M18.0822 17.7705H9.26899C8.93893 17.7705 8.67139 18.038 8.67139 18.3681C8.67139 18.6982 8.93893 18.9657 9.26899 18.9657H18.0823C18.4123 18.9657 18.6798 18.6982 18.6798 18.3681C18.6798 18.0381 18.4123 17.7705 18.0822 17.7705Z"
                            fill="#333456" fill-opacity="0.7" />
                    </svg>

                    <!-- <img src="../assets/img/icons/task.png" alt="task"> -->


                    <h6>Describe your task </h6>
                    <p>Tell us what you need done, <br> when and where by filling out the <br> form</p>
                </div>
                <div class="col-md-4 get-quotes">
                    <svg width="100" height="100" viewBox="0 -5 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.0669 6.43313L16.8169 0.183105C16.6997 0.065918 16.541 0 16.375 0H3.24996C1.87184 0 0.75 1.12119 0.75 2.50002V27.5C0.75 28.8788 1.87184 30 3.25002 30H20.75C22.1282 30 23.25 28.8788 23.25 27.5V6.87498C23.25 6.70898 23.1841 6.55031 23.0669 6.43313ZM17 2.13381L21.1162 6.25002H18.25C17.5603 6.25002 17 5.6891 17 5.00004V2.13381ZM22 27.5C22 28.189 21.4397 28.75 20.75 28.75H3.25002C2.56031 28.75 2.00004 28.189 2.00004 27.5V2.50002C2.00004 1.81096 2.56037 1.25004 3.25002 1.25004H15.75V5.00004C15.75 6.37881 16.8718 7.5 18.25 7.5H22V27.5Z"
                            fill="#333456" fill-opacity="0.8" />
                        <path
                            d="M18.875 17.5H5.12502C4.77955 17.5 4.5 17.7796 4.5 18.125C4.5 18.4705 4.77955 18.75 5.12502 18.75H18.875C19.2205 18.75 19.5001 18.4705 19.5001 18.125C19.5 17.7796 19.2204 17.5 18.875 17.5Z"
                            fill="#333456" fill-opacity="0.8" />
                        <path
                            d="M18.875 13.75H5.12502C4.77955 13.75 4.5 14.0296 4.5 14.375C4.5 14.7205 4.77955 15.0001 5.12502 15.0001H18.875C19.2205 15.0001 19.5001 14.7205 19.5001 14.375C19.5 14.0296 19.2204 13.75 18.875 13.75Z"
                            fill="#333456" fill-opacity="0.8" />
                        <path
                            d="M18.875 21.25H5.12502C4.77955 21.25 4.5 21.5296 4.5 21.875C4.5 22.2205 4.77955 22.5 5.12502 22.5H18.875C19.2205 22.5 19.5001 22.2205 19.5001 21.875C19.5 21.5296 19.2204 21.25 18.875 21.25Z"
                            fill="#333456" fill-opacity="0.8" />
                        <path
                            d="M12.625 25H5.12502C4.77955 25 4.5 25.2796 4.5 25.625C4.5 25.9705 4.77955 26.25 5.12502 26.25H12.625C12.9705 26.25 13.25 25.9705 13.25 25.625C13.25 25.2796 12.9705 25 12.625 25Z"
                            fill="#333456" fill-opacity="0.8" />
                        <path
                            d="M10.75 10.625C10.75 10.9705 11.0296 11.25 11.375 11.25H18.875C19.2205 11.25 19.5001 10.9705 19.5001 10.625C19.5001 10.2796 19.2205 10 18.875 10H11.375C11.0296 10.0001 10.75 10.2796 10.75 10.625Z"
                            fill="#333456" fill-opacity="0.8" />
                        <path
                            d="M6.375 10.0001H5.12502C4.77955 10.0001 4.5 10.2797 4.5 10.6251C4.5 10.9706 4.77955 11.2502 5.12502 11.2502H5.75004C5.75004 11.5956 6.02959 11.8752 6.37506 11.8752C6.72053 11.8752 7.00008 11.5956 7.00008 11.2502V11.135C7.72594 10.8761 8.25 10.1888 8.25 9.3751C8.25 8.34115 7.40895 7.5001 6.375 7.5001C6.03076 7.5001 5.74998 7.21996 5.74998 6.87508C5.74998 6.53025 6.03076 6.25006 6.375 6.25006H7.62498C7.97045 6.25006 8.25 5.97051 8.25 5.62504C8.25 5.27957 7.97045 5.00002 7.62498 5.00002H6.99996C6.99996 4.65455 6.72041 4.375 6.37494 4.375C6.02947 4.375 5.74992 4.65455 5.74992 5.00002V5.11516C5.02406 5.37408 4.5 6.06133 4.5 6.87508C4.5 7.90902 5.34105 8.75008 6.375 8.75008C6.71924 8.75008 7.00002 9.03021 7.00002 9.3751C7.00002 9.71998 6.71924 10.0001 6.375 10.0001Z"
                            fill="#333456" fill-opacity="0.8" />
                    </svg>

                    <!-- <img src="../assets/img/icons/quote.png" alt="task"> -->

                    <h6>Get Quotes </h6>
                    <p>Request quotes from any <br> iGofer professional of your <br> choice</p>
                </div>
                <div class="col-md-4">
                    <svg width="100" height="100" viewBox="20 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#F5F5F7" />
                        <path
                            d="M46.9527 43.1437C46.9504 43.1378 46.9481 43.132 46.9456 43.1262C46.4063 41.8643 45.1415 41.3979 43.6447 41.9091L39.5626 43.038C39.3266 42.3233 38.7379 41.7151 37.9055 41.4062C37.9003 41.4043 37.8952 41.4024 37.89 41.4007L33.4028 39.8777C33.0293 39.3949 31.8594 38.1597 29.669 38.1597C28.1383 38.1597 26.7841 39.2098 26.0094 40.3544H20.5859C20.2623 40.3544 20 40.6167 20 40.9404V48.3277C20 48.6513 20.2623 48.9136 20.5859 48.9136H24.0697C24.3934 48.9136 24.6557 48.6513 24.6557 48.3277V47.8218H26.2895C26.6131 47.8218 26.8754 47.5595 26.8754 47.2358V47.0672C27.8278 47.1503 28.141 47.3309 29.0157 47.8353C29.6884 48.2232 30.705 48.8094 32.5358 49.6326C32.5443 49.6364 32.5529 49.6401 32.5616 49.6435C32.9129 49.7817 33.5998 49.9988 34.4467 49.9988C35.0362 49.9988 35.7032 49.8935 36.388 49.5832L45.4109 46.3525C45.4269 46.3468 45.4428 46.3404 45.4582 46.3332C46.3205 45.9365 47.6056 44.8183 46.9527 43.1437ZM23.4838 47.7417H21.1719V41.5262H23.4838V47.7417ZM25.7035 46.6498H24.6557V41.5262H25.7035V46.6498ZM44.99 45.2584L35.9711 48.4876C35.9632 48.4904 35.9525 48.4946 35.9447 48.4978C35.9368 48.501 35.9289 48.5044 35.9211 48.508C34.665 49.0852 33.4711 48.7396 33.0031 48.5577C31.2346 47.762 30.2908 47.2177 29.6011 46.82C28.6423 46.2671 28.1803 46.0006 26.8754 45.8929V41.1736C27.4308 40.2633 28.5079 39.3315 29.6691 39.3315C31.6604 39.3315 32.5043 40.6267 32.5374 40.679C32.609 40.7953 32.7189 40.883 32.8483 40.9269L37.505 42.5074C38.2487 42.7866 38.6418 43.4235 38.4611 44.0587C38.3778 44.352 38.1851 44.5953 37.9187 44.7437C37.6546 44.8908 37.3494 44.9272 37.0584 44.8467L31.8088 43.1831C31.5001 43.0853 31.171 43.2562 31.0732 43.5646C30.9754 43.8731 31.1463 44.2024 31.4548 44.3002L36.7135 45.9667C36.7191 45.9685 36.7246 45.9702 36.7303 45.9717C36.9402 46.0314 37.154 46.061 37.3664 46.061C37.7554 46.061 38.14 45.9619 38.4891 45.7674C39.029 45.4666 39.4193 44.9736 39.5883 44.3792C39.6018 44.3317 39.6137 44.2842 39.6241 44.2368L44.0235 43.018C44.6589 42.801 45.493 42.7228 45.8643 43.5781C46.2487 44.5822 45.2497 45.1346 44.99 45.2584Z"
                            fill="#333456" fill-opacity="0.7" />
                        <path
                            d="M49.4141 21.9859H45.9303C45.6067 21.9859 45.3444 22.2482 45.3444 22.5718V23.0777H43.7106C43.387 23.0777 43.1247 23.3401 43.1247 23.6637V23.8323C42.1723 23.7492 41.859 23.5686 40.9844 23.0642C40.3118 22.6763 39.2951 22.0901 37.4642 21.2669C37.4557 21.263 37.4472 21.2595 37.4384 21.2561C36.8425 21.0216 35.2805 20.5602 33.6123 21.3162L31.2545 22.1605L29.2671 20.1731C29.0383 19.9443 28.6672 19.9443 28.4384 20.1731L21.9136 26.6979C21.7025 26.909 21.662 27.275 21.9136 27.5266L33.0632 38.6762C33.2416 38.8547 33.6594 38.9087 33.8919 38.6762L39.8488 32.7193C40.0037 32.7327 40.1644 32.7399 40.331 32.7399C41.8618 32.7399 43.2159 31.6898 43.9906 30.5452H49.4141C49.7377 30.5452 50.0001 30.2829 50.0001 29.9593V22.5718C50.0001 22.2482 49.7377 21.9859 49.4141 21.9859ZM28.8527 21.416L30.1882 22.7515C29.7912 22.997 29.3322 23.1284 28.8527 23.1284C28.3731 23.1284 27.9142 22.9971 27.5172 22.7515L28.8527 21.416ZM24.492 28.4477L23.1566 27.1122L24.492 25.7767C24.7375 26.1737 24.8689 26.6327 24.8689 27.1122C24.8689 27.5917 24.7376 28.0507 24.492 28.4477ZM33.4776 37.4332L32.1423 36.098C32.9575 35.5949 33.9975 35.5949 34.8127 36.098L33.4776 37.4332ZM35.6569 35.2539C34.3621 34.3146 32.593 34.3146 31.2982 35.2539L25.3362 29.2918C25.7937 28.6625 26.0408 27.9066 26.0408 27.1122C26.0408 26.3177 25.7938 25.5619 25.3362 24.9326L26.6731 23.5957C27.3024 24.0533 28.0583 24.3003 28.8527 24.3003C29.6472 24.3003 30.4031 24.0533 31.0324 23.5957L32.2997 24.863C32.0262 24.9034 31.7596 24.9935 31.5109 25.1321C31.0909 25.3661 30.7614 25.7166 30.5562 26.1406C29.8952 26.263 29.2834 26.5829 28.8034 27.0629C27.5011 28.3652 27.5011 30.4841 28.8034 31.7864C29.4545 32.4375 30.3098 32.7631 31.1652 32.7631C32.0204 32.7631 32.8758 32.4376 33.5269 31.7864C33.9506 31.3628 34.2474 30.8421 34.396 30.2747L36.3744 30.9461C36.1517 31.9778 36.3798 33.0632 36.9951 33.9158L35.6569 35.2539ZM32.0946 29.4933C32.0997 29.4952 32.1049 29.4971 32.1101 29.4989L33.2817 29.8965C33.1933 30.2958 32.993 30.663 32.6983 30.9578C31.8529 31.8031 30.4774 31.8032 29.6321 30.9578C28.7867 30.1124 28.7867 28.737 29.6321 27.8916C29.836 27.6875 30.0767 27.5281 30.3389 27.42C30.447 28.3201 31.0951 29.1224 32.0946 29.4933ZM37.8393 33.0714C37.6132 32.7029 37.4852 32.2822 37.465 31.8529C37.7456 32.0558 38.0886 32.2546 38.4983 32.4124L37.8393 33.0714ZM43.1246 29.7257C42.5693 30.6361 41.4922 31.5679 40.331 31.5679C40.1137 31.5679 39.9101 31.5524 39.7197 31.5249C39.719 31.5248 39.7182 31.5247 39.7174 31.5246C38.452 31.3407 37.7714 30.6216 37.547 30.3368C37.5351 30.3192 37.4841 30.2526 37.4766 30.2415C37.4083 30.1195 37.2964 30.0215 37.1537 29.973L32.495 28.3918C31.7516 28.1128 31.3586 27.4762 31.5387 26.8413C31.5388 26.8409 31.5389 26.8405 31.539 26.84C31.5392 26.8396 31.5393 26.839 31.5394 26.8386C31.6232 26.5462 31.8155 26.3037 32.0813 26.1556C32.3453 26.0085 32.6505 25.972 32.9416 26.0527L38.1912 27.7162C38.4997 27.8141 38.829 27.6431 38.9268 27.3346C39.0245 27.0261 38.8537 26.6968 38.5452 26.599L34.3701 25.276L34.3337 25.2396C34.3333 25.2392 34.333 25.2388 34.3326 25.2384L32.171 23.0769L34.0289 22.4116C34.0352 22.4094 34.0429 22.4065 34.0491 22.404C34.0507 22.4033 34.0538 22.4022 34.0553 22.4015C34.0633 22.3983 34.0711 22.3949 34.0789 22.3913C35.3349 21.814 36.5288 22.1596 36.9968 22.3416C38.7653 23.1373 39.7093 23.6816 40.3989 24.0793C41.3578 24.6322 41.8198 24.8987 43.1246 25.0064V29.7257ZM45.3444 29.3732H44.2965V24.2496H45.3444V29.3732ZM48.8282 29.3732H46.5162V23.1578H48.8282V29.3732Z"
                            fill="#333456" fill-opacity="0.7" />
                    </svg>

                    <!-- <img src="../assets/img/icons/payment.png" alt="task"> -->

                    <h6>Make payment </h6>
                    <p>Pay securely after your job <br> has been completed to <br> your satisfaction</p>
                </div>
            </div>

            <!-- <img src="../assets/img/icons/how-it-works.svg" alt="works"> -->
        </section>

        <!-- services -->
        <section>
            <div id="exTab1" class="container">
                <!-- <ul class="nav nav-pills mb-4">
                    <li class="active">
                        <a href="#1a" data-toggle="tab">Cleaning</a>
                    </li>
                    <li>
                        <a href="#2a" data-toggle="tab">Carpentry</a>
                    </li>
                    <li>
                        <a href="#3a" data-toggle="tab">Plumbering</a>
                    </li>
                    <li>
                        <a href="#4a" data-toggle="tab">Painting</a>
                    </li>
                    <li>
                        <a href="#5a" data-toggle="tab">Fumigation</a>
                    </li>
                    <li>
                        <a href="#6a" data-toggle="tab">more <span><img src="assets/img/icons/arrow.png"
                                    alt="arrow"></span></a>
                    </li>
                </ul> -->

                <ul class="nav nav-tabs nav-justified">
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="setActive('cleaning')"
                            :class="{ active: isActive('cleaning') }" href="#cleaning">Cleaning</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="setActive('carpentry')"
                            :class="{ active: isActive('carpentry') }" href="#carpentry">Carpentry</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="setActive('plumbering')"
                            :class="{ active: isActive('plumbering') }" href="#plumbering">Plumbering</a>
                    </li>

                    <li class="nav-item d-none d-sm-block">
                        <a class="nav-link" @click.prevent="setActive('painting')"
                            :class="{ active: isActive('painting') }" href="#painting">Painting</a>
                    </li>

                    <li class="nav-item d-none d-sm-block">
                        <a class="nav-link" @click.prevent="setActive('fumigation')"
                            :class="{ active: isActive('fumigation') }" href="#fumigation">Fumigation</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="setActive('more')" :class="{ active: isActive('more') }"
                            href="#more">more
                            <span><img src="../assets/img/icons/arrow2.png" alt="arrow"></span>
                        </a>
                    </li>
                </ul>



                <div class="tab-content py-3" id="myTabContent">
                    <div class="tab-pane fade" :class="{ 'active show': isActive('cleaning') }" id="cleaning">


                        <div class="cleaning">
                            <div class="text-left pt-4 pl-5 container">
                                <img class="pb-2 d-none d-sm-block" src="assets/img/icons/cleaning.png" alt="cleaning-image">
                                <p class="text-left text-light">
                                    For all your cleaning services you have in mind and some you haven't thought of yet.
                                </p>
                            </div>

                            <a href="#">
                                <p class="text-left text-light container pt-5 pl-5">
                                    view all cleaning services
                                    <span>
                                        <img src="assets/img/icons/arrow.png" alt="arrow"> </span>
                                </p>
                            </a>
                        </div>

                        <div class="row mt-3 services-types">

                             <div v-for="(service, i) in services" :key="i" class="col-md-3 col-3">
                                <img :src="service.image" :alt="service.alt" @click="TaskDescription">
                                <h5 class="text-left mb-0 mt-1 font-weight-bolder">{{service.title}}</h5>
                                <p class="text-left">{{service.total}} professionals</p>
                            </div>
                        </div>

                    </div>


                    <div class="tab-pane fade" :class="{ 'active show': isActive('carpentry') }" id="carpentry">Carpentry
                        content</div>

                    <div class="tab-pane fade" :class="{ 'active show': isActive('plumbering') }" id="plumbering">Plumbering
                        content</div>

                    <div class="tab-pane fade" :class="{ 'active show': isActive('painting') }" id="painting">Painting
                        content</div>

                    <div class="tab-pane fade" :class="{ 'active show': isActive('fumigation') }" id="fumigation">Fumigation
                        content</div>

                    <div class="tab-pane fade" :class="{ 'active show': isActive('more') }" id="more">More
                        content</div>

                </div>

            </div>
        </section>

        <!-- Testimonial -->
        <section class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <p class="text-left customer">Our customers love what we do.</p>
                    <p class="text-left customer-word">Over 200 people use iGofer for their handyman services and
                        make their lives easier and better </p>
                </div>


                <!-- <div class="col-md-6 owl-carousel owl-theme">
                    <div class="testimonal p-3 item">
                        <p class="text-left ">I was interested. So I asked for someone to clean my house. They jumped at
                            it. 10 minutes later a certain Godwin called me. Godwin showed up, dressed and well
                            mannered. 3 hours later he had done a great job!</p>
                        <div class="d-flex">
                            <img src="/assets/img/testimonial/picture1.svg" alt="testimonial">
                            <div>
                                <p class="text-left mb-0 pt-4 pl-2 font-weight-bolder">Folajimi Aroloye</p>
                                <p class="text-left pl-2">Fourth Canvas</p>
                            </div>
                        </div>

                    </div>

                    <div class="testimonal p-3 mb-5 item">
                        <p class="text-left">I was interested. So I asked for someone to clean my house. They jumped at
                            it. 10 minutes later a certain Godwin called me. Godwin showed up, dressed and well
                            mannered. 3 hours later he had done a great job!</p>
                        <div class="d-flex">
                            <img src="/assets/img/testimonial/picture2.svg" alt="testimonial">
                            <p class="text-left pt-3 pl-2 font-weight-bolder">Folajimi Aroloye</p>
                        </div>
                    </div>

                    <div class="testimonal p-3 mb-5  item">
                        <p class="text-left">I was interested. So I asked for someone to clean my house. They jumped at
                            it. 10 minutes later a certain Godwin called me. Godwin showed up, dressed and well
                            mannered. 3 hours later he had done a great job!</p>
                        <div class="d-flex">
                            <img src="/assets/img/testimonial/picture2.svg" alt="testimonial">
                            <p class="text-left pt-3 pl-2 font-weight-bolder">Folajimi Aroloye</p>
                        </div>
                    </div>

                    <div class="testimonal p-3 mb-5 item">
                        <p class="text-left">I was interested. So I asked for someone to clean my house. They jumped at
                            it. 10 minutes later a certain Godwin called me. Godwin showed up, dressed and well
                            mannered. 3 hours later he had done a great job!</p>
                        <div class="d-flex">
                            <img src="/assets/img/testimonial/picture2.svg" alt="testimonial">
                            <p class="text-left pt-3 pl-2 font-weight-bolder">Folajimi Aroloye</p>
                        </div>
                    </div>
                </div> -->
            </div>

        </section>

        <!-- Get iGofer app from playstore -->
        <section get-app>
            <div class="get-app-div">
                <h3 class="m-auto">Get the app</h3>
                <p class="m-auto get-app-text">It's even better on your phone</p>
                <img src="../assets/img/icons/playstore.svg" class="mt-4 pr-3" alt="google playstore">
                <img src="../assets/img/icons/ios-store.svg" class="mt-4" alt="iOs-store">

                <div class="container row mt-4 content">
                    <div class="col-sm-3  col-xs-3 col-md-4">
                        <img src="../assets/img/icons/phone.svg" alt="phone" class="phone">
                    </div>

                    <div class="col-sm-9 d-none d-sm-block col-xs-3 col-md-8">
                        <p class="download-app pt-5">Download the iGofer app</p>
                        <ul class="app-features">
                            <li> <span>Book and mange appointments</span> </li>
                            <li> <span>Message on the go</span> </li>
                            <li> <span>View workers profiles and ratings</span> </li>
                            <li> <span>See real time location of your worker</span> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- become an igofer worker -->
        <section>
            <div class="row">
                <div class="d-none d-sm-block d-md-none d-lg-block col-md-12 col-xl-6 col-sm-12">
                    <img class="become-worker-img" src="/assets/img/homepage/becomeworker.svg" alt="become a worker">
                </div>
                <div class="col-md-12 col-xl-6 col-sm-12">
                    <h4 class="text-left become-worker">Join the pool of professional iGofer workers</h4>
                    <p class="text-left">Whatever work you do, we'll find you the jobs your want.</p>
                    <button class="worker-button">Become an iGofer worker</button>
                </div>
            </div>
        </section>

        <!-- footer -->
        <the-footer />
    </div>
</template>

<script>
    import NavBar from '../components/HomePage/NavBar.vue';
    import TheFooter from '../components/HomePage/TheFooter.vue';
    import {cleaningSubServices} from '../components/Api/Service.js'
    export default {
        data() {
                return {
                    activeItem: 'cleaning',
                    services: [],
                    subService: []
                }
            },
            components: {
                'nav-bar': NavBar,
                'the-footer': TheFooter
            },

            methods: {
                isActive(menuItem) {
                    return this.activeItem === menuItem
                },
                setActive(menuItem) {
                    this.activeItem = menuItem
                },
                TaskDescription() {
                    this.$router.push({
                        path: 'task-description'
                    })
                }

            },

            created() {
                cleaningSubServices.forEach(service => {
                    this.services.push(service);
                })
            },

            mounted() {
                $(document).ready(function () {

                    $(".owl-carousel").owlCarousel({
                        items: 1,
                        loop: false,
                        mouseDrag: false,
                        touchDrag: false,
                        pullDrag: false,
                        rewind: true,
                        autoplay: true,
                        margin: 0,
                        nav: false,
                        // itemsDesktop : [1199,10],
                        // itemsDesktopSmall : [980,9],
                        // itemsTablet: [768,5],
                        // itemsTabletSmal l: false,
                        // itemsMobile : [479,4]
                    });

                    // let newBackground = document.getElementByTagName('SPAN')
                    // newBackground.style.background = '#FF6600;'
                });
            }

    }
</script>

<style scoped src="../assets/css/Homepage.css"></style>