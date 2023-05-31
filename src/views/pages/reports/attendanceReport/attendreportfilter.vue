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
               
              <vue-select :options="monthattendancereport" />
              
                <label class="focus-label">Month</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                
               <vue-select :options="yearattendancereport" />
               
                <label class="focus-label">Year</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="d-grid">
                <a href="#" class="btn btn-success"> Search </a>  
              </div>
            </div>     
                    </div>
          <!-- /Search Filter -->
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      monthattendancereport: ["Jan", "Feb", "Mar"],
      yearattendancereport: ["2020", "2019", "2018"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</script>