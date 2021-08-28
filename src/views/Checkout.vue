<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Infomation </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2"> Payment </v-stepper-step>
      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-container>
          <div class="row justify-center">
            <v-col cols="12" sm="6" md="4" class="mr-5">
              <div class="text-h6 mb-4">Contact Infomation</div>
              <v-divider class="mb-4"></v-divider>
              <v-row>
                <v-col>
                  <v-text-field
                    :rules="[rules.required]"
                    label="Email"
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="text-h6 mb-4">Billing Address</div>
              <v-divider class="mb-4"></v-divider>
              <v-form ref="form" v-model="valid">
                <v-row>
                  <v-col>
                    <v-text-field
                      dense
                      :rules="[rules.required]"
                      label="First name"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      :rules="[rules.required]"
                      label="Last name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-text-field
                  label="Company(Optional)"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  :rules="[rules.required]"
                  label="Address"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  label="Apartment,suite,etc... "
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  :rules="[rules.required]"
                  label="City"
                  outlined
                  dense
                ></v-text-field>
                <v-row>
                  <v-col>
                    <v-select
                      :items="items"
                      label="Country/Region"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col>
                    <v-text-field
                      :rules="[rules.required]"
                      label="Postal Code"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-text-field
                  :rules="[rules.required]"
                  label="Phone"
                  outlined
                  dense
                ></v-text-field>
              </v-form>
              <v-btn color="primary" :disabled="!valid" large @click="e1 = 2">
                Continue
              </v-btn>
            </v-col>

            <v-col cols="12" md="6" sm="4" class="ml-5">
              <div class="text-h6 mb-4">Items in cart</div>
              <v-divider class="mb-4"></v-divider>
              <v-row class="ml-5" justify="center">
                <v-list-item
                  v-for="product in cart"
                  :key="product.id"
                  class="my-3"
                >
                  <v-badge overlap color="pink">
                    <span slot="badge"> {{ product.quantity }}</span>
                    <v-avatar class="pt-3" rounded width="70" height="60">
                      <v-img
                        :src="product.product.img"
                        width="70"
                        height="60"
                      ></v-img>
                    </v-avatar>
                  </v-badge>

                  <v-list-item two-line>
                    <v-list-item-content>
                      <div class="min-w-0 flex-grow-1">
                        <v-list-item-title
                          class="mb-1 font-weight-bold truncate"
                        >
                          {{ product.product.title }}</v-list-item-title
                        >
                        <v-list-item-subtitle
                          v-if="product.product.price == 0"
                          class="
                            red--text
                            text--darken-4
                            font-weight-black
                            mb-1
                          "
                          >Free</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          v-else
                          class="
                            red--text
                            text--darken-4
                            font-weight-black
                            mb-1
                          "
                          >${{
                            parseFloat(product.product.price).toFixed(2)
                          }}</v-list-item-subtitle
                        >
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item>
              </v-row>
              <v-divider class="my-4" v-if="cart.length > 0"></v-divider>
              <v-row justify="center" v-if="cart.length > 0">
                <div
                  class="text-h5 font-weight-bold"
                  v-html="`Total: ${totalPrice} $`"
                ></div>
              </v-row>
            </v-col>
          </div>

          <v-divider vertical dark></v-divider>
        </v-container>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-container>
          <div class="row justify-center">
            <v-col  cols="12" sm="6" md="4">
              <v-simple-table style="border-style: solid; border-width: 1px ">
                <tbody>
                  <tr>
                    <td>Contact</td>
                    <td>example@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Billing</td>
                    <td>example, example, VietNam</td>
                  </tr>
                </tbody>
              </v-simple-table>
               <div class="text-h6 mt-4">Add tip</div>
              <v-divider class="mb-4"></v-divider>
                <v-text-field outlined label="Support our team" type="number"></v-text-field>
               <div class="text-h6 mt-4">Payment</div>
              <v-divider class="mb-4"></v-divider>
              <v-form ref="form" v-model="valid" class="my-6">
                <v-radio-group row>
                  <v-radio label="MasterCard">
                    
                  </v-radio>
                  <v-radio label="Visa">
                    
                  </v-radio>
                  <v-radio label="Napas">
                   
                  </v-radio>
                </v-radio-group>
                <v-text-field
                  label="Card number"
                  outlined
                   :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  :rules="[rules.required]"
                  label="Name on card"
                  outlined           
                ></v-text-field>
                <v-row>
                  <v-col>
                    <v-text-field
                      :rules="[rules.required]"
                      label="Expiration date (MM/YY)"
                      outlined
                    
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      :rules="[rules.required]"
                      label="Security code"
                      outlined
                    
                    ></v-text-field>
                  </v-col>
                </v-row>

              </v-form>
               <v-btn color="primary"> Complete Payment </v-btn>

        <v-btn text @click="e1 = 1"> Return </v-btn>
            </v-col>
          </div>
        </v-container>
       
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "Checkout",
      items: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "VietNam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands",
      ],

      e1: 1,
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  computed: {
    ...mapGetters(["cart", "totalPrice"]),
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>