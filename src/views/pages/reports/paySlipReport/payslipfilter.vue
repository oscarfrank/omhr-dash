<template>
        <!-- Search Filter -->
        <div class="row filter-row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                  <vue-select :options="payslipreportmonth" />
                <label class="focus-label">Month</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                  <vue-select :options="payslipreportyear" />
                <label class="focus-label">Year</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <a href="#" class="btn btn-success w-100"> Search </a>  
            </div>     
          </div>
          <!-- /Search Filter -->
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      payslipreportmonth: ["Jan", "Feb", "Mar"],
      payslipreportyear: ["2018", "2019", "2020"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</script>