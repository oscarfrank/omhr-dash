<template>
<form>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Default Country</label>
                                            <vue-select :options="localizationcountry" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Date Format</label>
                                             <vue-select :options="localizationdate" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Timezone</label>
                                            <vue-select :options="localizationtimezone" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Default Language</label>
                                            <vue-select :options="localizationlanguage" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Currency Code</label>
                                            <vue-select :options="localizationcurrenycode" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Currency Symbol</label>
                                            <input class="form-control" readonly value="$" type="text">
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="submit-section">
                                            <button class="btn btn-primary submit-btn">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      localizationcountry: ["USA", "United Kingdom"],
      localizationdate: ["15/05/2016", "15.05.2016", "15-05-2016", "05/15/2016", "2016/05/15", "2016-05-15", "May 15 2016", "15 May 2016"],
      localizationtimezone: ["(UTC +5:30) Antarctica/Palmer"],
      localizationlanguage: ["English", "French"],
      localizationcurrenycode: ["USD", "Pound", "EURO", "Ringgit"]
    }
    },
    components: {
   
    },
    
    mounted() {
    },
  }
</script>