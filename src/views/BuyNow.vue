<template>
        <section>
            <div class="row page-title-path">
                <div class="col">
                    <h2>{{ $t('main-title') }}</h2>
                </div>
                <div class="col right">
                    <p>Home > <span> My Channels</span></p>
                </div>
            </div>
            <div class="row plans">
                <div class="col s12 l4">
                    <div class="average">
                        <div class="price-package">
                            <div class="package-name">
                                <h2>Start-Up</h2>
                            </div>
                            <div class="package-price">
                                <div class="package-arrow"></div>
                                <div class="price">
                                    <sup>R</sup>
                                    <span>1,119</span>
                                </div>
                                <div class="term">
                                    <sup>.99</sup>
                                    <span>/per month *3</span>
                                </div>
                                <div class="package-features">
                                    <div class="package-arrow"></div>
                                    <ul>
                                        <li>3 Pages</li>
                                        <li>Custom Design</li>
                                        <li>Search Engine Optimization</li>
                                        <li>Basic Google Adword</li>
                                        <li>10 Key words</li>
                                        <li>Contact Form</li>
                                    </ul>
                                    <button class="sign-up">
                                        <h3>sign up now!</h3>
                                    </button>
                                </div><!--package-features-->
                            </div><!--package-price-->
                        </div><!--price-package-->
                    </div><!--average-->
                </div>
                <div class="col s12 l4">
                    <div class="special">
                        <div class="price-package">
                            <div class="package-name">
                                <h2>Business</h2>
                            </div>
                            <div class="package-price">
                                <div class="package-arrow"></div>
                                <div class="price">
                                    <sup>R</sup>
                                    <span>1,999</span>
                                </div>
                                <div class="term">
                                    <sup>.99</sup>
                                    <span>/per month *3</span>
                                </div>
                                <div class="package-features">
                                    <div class="package-arrow"></div>
                                    <ul>
                                        <li>6 Pages</li>
                                        <li>Custom Design</li>
                                        <li>Search Engine Optimization</li>
                                        <li>Pay Per Click</li>
                                        <li>Advanced Google Adword</li>
                                        <li>25 Key words</li>
                                        <li>Contact Form</li>
                                        <li>Free Digital Marketing material</li>
                                        <button class="sign-up">
                                            <h3>sign up now!</h3>
                                        </button>
                                    </ul>
                                </div><!--package-features-->
                            </div><!--package-price-->
                        </div><!--price-package-->
                    </div><!--special-->
                </div>
                <div class="col s12 l4">
                    <div class="superduper">
                        <div class="price-package">
                            <div class="package-name">
                                <h2>super duper</h2>
                            </div>
                            <div class="package-price">
                                <div class="package-arrow"></div>
                                <div class="price">
                                    <sup>$</sup>
                                    <span>99</span>
                                </div>
                                <div class="term">
                                    <sup>.99</sup>
                                    <span>/month</span>
                                </div>
                                <div class="package-features">
                                    <div class="package-arrow"></div>
                                    <ul>
                                        <li><em>Super Duper Feature</em></li>
                                        <li>Special Feature 1</li>
                                        <li>Special Feature 2</li>
                                        <li>Average Feature 1</li>
                                        <li>Average Feature 2</li>
                                        <li>Average Feature 3</li>
                                    </ul>
                                    <button class="sign-up">
                                        <h3>sign up now!</h3>
                                    </button>
                                </div><!--package-features-->
                            </div><!--package-price-->
                        </div><!--price-package-->
                    </div><!--superduper-->
                </div>
            </div>
        </section>
</template>

<script>
    export default {
        name: "BuyNow"
    }
</script>

<style scoped>
    .plans h2 {
        font-size: .9em;
        font-weight: bold;
        display: inline;
        text-transform: uppercase;
    }
    h3 {
        font-size: 1.2em;
        display: inline;
        text-transform: capitalize;
    }
    em {
        font-style: normal;
        text-decoration: underline;
        font-size: 1rem;
    }
    plans section {
        text-align: justify !important;
        text-justify: distribute-all-lines;
        font-size: 0 !important;
    }
    .plans  > * {
        text-align: left;
        font-size: medium;
    }
    section:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
    section > div {
        vertical-align: top;
        width: 100%;
        margin-bottom: 1.9%;
    }
    @media only screen and (max-width: 529px) {
        section > div {
            width: 100%;
            margin-bottom: 1.9%;
        }
    }
    .price-package {
        padding-top: 20px;
        margin-bottom: 10px;
        text-align: center;
        -moz-border-radius-topleft: 10px;
        -moz-border-radius-topright: 10px;
        -webkit-border-top-left-radius: 10px;
        -webkit-border-top-right-radius: 10px;
        -moz-border-radius-bottomleft: 10px;
        -moz-border-radius-bottomright: 10px;
        -webkit-border-bottom-left-radius: 10px;
        -webkit-border-bottom-right-radius: 10px;
    }
    .price-package .package-name {
        font-size: 1.4rem;
    }
    @media only screen and (max-width: 529px) {
        .price-package {
            padding-top: 1rem;
        }
    }
    .price-package .package-price {
        -moz-border-radius-topleft: 10px;
        -moz-border-radius-topright: 10px;
        -webkit-border-top-left-radius: 10px;
        -webkit-border-top-right-radius: 10px;
        -moz-border-radius-bottomleft: 10px;
        -moz-border-radius-bottomright: 10px;
        -webkit-border-bottom-left-radius: 10px;
        -webkit-border-bottom-right-radius: 10px;
        margin-top: 25px;
    }
    @media only screen and (max-width: 529px) {
        .price-package .package-price {
            margin-top: 1rem;
        }
    }
    .price-package .package-price .price {
        position: relative;
        display: inline-block;
    }
    .price-package .package-price .price sup {
        font-size: 1.3rem;
        position: absolute;
        top: 6px;
        left: -12px;
    }
    .price-package .package-price .price span {
        font-size: 3.5rem;
    }
    .price-package .package-price .term {
        display: inline-block;
        vertical-align: top;
        text-align: left;
        padding-top: 6px;
    }
    .price-package .package-price .term sup {
        font-size: 1.5rem;
        display: block;
        padding: 0;
    }
    .price-package .package-price .term span {
        font-size: 1rem;
        display: block;
        margin-top: -3px;
    }
    .price-package .package-features {
        -moz-border-radius-topleft: 10px;
        -moz-border-radius-topright: 10px;
        -webkit-border-top-left-radius: 10px;
        -webkit-border-top-right-radius: 10px;
        -moz-border-radius-bottomleft: 10px;
        -moz-border-radius-bottomright: 10px;
        -webkit-border-bottom-left-radius: 10px;
        -webkit-border-bottom-right-radius: 10px;
        margin-top: 16.666666666667px;
    }
    .price-package .package-features ul {
        font-size: 1.1rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .price-package .package-features ul li {
        margin: 10px auto;
        padding: 0;
    }
    @media only screen and (max-width: 529px) {
        .price-package .package-features ul li {
            margin: 10px auto;
        }
    }
    .price-package .sign-up {
        -moz-border-radius-topleft: 10px;
        -moz-border-radius-topright: 10px;
        -webkit-border-top-left-radius: 10px;
        -webkit-border-top-right-radius: 10px;
        -moz-border-radius-bottomleft: 10px;
        -moz-border-radius-bottomright: 10px;
        -webkit-border-bottom-left-radius: 10px;
        -webkit-border-bottom-right-radius: 10px;
        padding: 16.666666666667px 0;
        margin-top: 16.666666666667px;
        width: 100%;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .price-package .package-arrow {
        width: 0;
        height: 0;
        margin: 0 auto 12.5px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 8px solid;
    }
    .all-plans .all-plans-features {
        display: table;
        width: 100%;
    }
    .all-plans .all-plans-features text {
        display: table-cell;
        font-size: 1.6rem;
        vertical-align: middle;
        width: 33%;
    }
    @media only screen and (max-width: 529px) {
        .all-plans .all-plans-features text {
            display: block;
            margin: 10px auto;
        }
    }
    .average .price-package {
        background-color: #009a86;
    }
    .average .price-package .package-name {
        color: white;
    }
    .average .price-package .package-price {
        background-color: #66CAA6;
        color: white;
    }
    .average .price-package .package-features {
        background-color: #e0f2ed;
        color: #009a86;
    }
    .average .price-package .sign-up {
        background-color: #009a86;
        color: white;
        transition: background-color 0.5s ease;
    }
    .average .price-package .sign-up:hover {
        background-color: #66CAA6;
    }
    .average .price-package .sign-up:active {
        background-color: #e0f2ed;
    }
    .average .price-package .package-price .package-arrow {
        border-top-color: #009a86;
    }
    .average .price-package .package-features .package-arrow {
        border-top-color: #66CAA6;
    }
    .average .price-package .sign-up .package-arrow {
        border-top-color: #e0f2ed;
    }
    .special .price-package {
        background-color: #273146;
    }
    .special .price-package .package-name {
        color: white;
    }
    .special .price-package .package-price {
        background-color: # #273146c2;
        color: white;
    }
    .special .price-package .package-features {
        background-color: #efe9fc;
        color: #273146;
    }
    .special .price-package .sign-up {
        background-color: #273146;
        color: white;
        transition: background-color 0.5s ease;
    }
    .special .price-package .sign-up:hover {
        background-color: # #273146c2;
    }
    .special .price-package .sign-up:active {
        background-color: #efe9fc;
    }
    .special .price-package .package-price .package-arrow {
        border-top-color: #273146;
    }
    .special .price-package .package-features .package-arrow {
        border-top-color: # #273146c2;
    }
    .special .price-package .sign-up .package-arrow {
        border-top-color: #efe9fc;
    }
    .superduper .price-package {
        background-color: #757575;
    }
    .superduper .price-package .package-name {
        color: white;
    }
    .superduper .price-package .package-price {
        background-color: #9e9e9e;
        color: white;
    }
    .superduper .price-package .package-features {
        background-color: #e0f2fa;
        color: #757575;
    }
    .superduper .price-package .sign-up {
        background-color: #757575;
        color: white;
        transition: background-color 0.5s ease;
    }
    .superduper .price-package .sign-up:hover {
        background-color: #9e9e9e;
    }
    .superduper .price-package .sign-up:active {
        background-color: #e0f2fa;
    }
    .superduper .price-package .package-price .package-arrow {
        border-top-color: #757575;
    }
    .superduper .price-package .package-features .package-arrow {
        border-top-color: #9e9e9e;
    }
    .superduper .price-package .sign-up .package-arrow {
        border-top-color: #e0f2fa;
    }
    .all-plans .price-package {
        background-color: #646c7f;
    }
    .all-plans .price-package .package-name {
        color: white;
    }
    .all-plans .price-package .package-price {
        background-color: #8b94ab;
        color: white;
    }
    .all-plans .price-package .package-features {
        background-color: #e5ebf4;
        color: #646c7f;
    }
    .all-plans .price-package .sign-up {
        background-color: #646c7f;
        color: white;
        transition: background-color 0.5s ease;
    }
    .all-plans .price-package .sign-up:hover {
        background-color: #8b94ab;
    }
    .all-plans .price-package .sign-up:active {
        background-color: #e5ebf4;
    }
    .all-plans .price-package .package-price .package-arrow {
        border-top-color: #646c7f;
    }
    .all-plans .price-package .package-features .package-arrow {
        border-top-color: #8b94ab;
    }
    .all-plans .price-package .sign-up .package-arrow {
        border-top-color: #e5ebf4;
    }
    .all-plans .package-features .package-arrow {
        border-top-color: #646c7f !important;
    }
    .all-plans .package-features {
        padding-bottom: 20px;
    }
</style>
<i18n>
    {
    "en": {
    "main-title": "Choose a Plan"
    },
    "fr": {
    "main-title": "Choisir un Plan "
    }
    }
</i18n>
