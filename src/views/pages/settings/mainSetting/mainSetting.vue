<template>
  <div class="settings">

                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                        
                            <!-- Page Header -->
                            <div class="page-header">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h3 class="page-title">Company Settings</h3>
                                    </div>
                                </div>
                            </div>
                            <!-- /Page Header -->
                            
                            <form>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Company Name <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" v-model="name">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Tagline</label>
                                            <input class="form-control " type="text" v-model="tagline">
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Logo</label>
                                            <input class="form-control" type="text" v-model="logo">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Icon</label>
                                            <input class="form-control " type="text" v-model="icon">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input class="form-control " type="text" v-model="street">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3">
                                        <div class="form-group">
                                            <label>Country</label>
                                            <vue-select v-model="country" :options="countrySelect" :settings="{ settingOption: value, settingOption: value }" @select="selectCountry($event)"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3">
                                        <div class="form-group">
                                            <label>City</label>
                                            <input class="form-control" type="text" v-model="city" >
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3">
                                        <div class="form-group">
                                            <label>State/Province</label>
                                            <input class="form-control" type="text" v-model="state" >
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3">
                                        <div class="form-group">
                                            <label>Postal Code</label>
                                            <input class="form-control" type="text" v-model="zipCode">
                                        </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Currency</label>
                                            <input class="form-control" type="text" v-model="currency">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Currency Symbol</label>
                                            <input class="form-control " type="text" v-model="currencySymbol">
                                        </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input class="form-control" type="email" v-model="email">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Phone Number</label>
                                            <input class="form-control" type="text" v-model="mobile">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Website Url</label>
                                            <input class="form-control" type="text" v-model="website">
                                        </div>
                                    </div>
                                </div>
                                <div class="submit-section">
                                    <loading-button color="btn btn-primary submit-btn" :isLoading="isLoading" @click="saveData">Save</loading-button>
                                </div>
                            </form>
                        </div>
                    </div>
                
                
            
  </div>
</template>
<script>

  import {computed} from 'vue'
  import countries from '../../../../data/countrySelect.json';
  import useComp from '../../../../composables/useComp';



  export default {

    setup(){
            const { user: userData, config } = useComp(); 
            const user = computed( ()=> userData.user );

            return { user, config }
    },
    data() {
    return {
        countrySelect: countries,
        isLoading: false,

        name: this.config.siteSettings.name,
        tagline: this.config.siteSettings.tagline,
        email: this.config.siteSettings.email,
        website: this.config.siteSettings.website,
        mobile: this.config.siteSettings.mobile,
        street: this.config.siteSettings.street,
        city: this.config.siteSettings.city,
        state: this.config.siteSettings.state,
        country: this.config.siteSettings.country, 
        zipCode: this.config.siteSettings.zipCode,
        logo: this.config.siteSettings.logo,
        icon: this.config.siteSettings.icon,
        currency: this.config.siteSettings.currency,
        currencySymbol: this.config.siteSettings.currencySymbol,

    }
    },
    components: {
   
    },
    methods: {
        
        selectCountry({id, text}) {
            this.country = text;
        },

        async saveData() {
                let data = {}
                this.isLoading = true;

                data = {
                    title: 'site',
                    name: this.name,
                    tagline: this.tagline,
                    email: this.email,
                    website: this.website,
                    mobile: this.mobile,
                    street: this.street,
                    city: this.city,
                    state: this.state,
                    country: this.country, 
                    zipCode: this.zipCode,
                    logo: this.logo,
                    icon: this.icon,
                    currency: this.currency,
                    currencySymbol: this.currencySymbol,                    
                }

                
                await this.config.saveSettings(data);
                
                this.isLoading = false;

            },

    },
    mounted() {

    },
    name: 'mainSetting'
  }
</script>