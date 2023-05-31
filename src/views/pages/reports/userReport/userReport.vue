<template>
  <div class="userreports">
          
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">User Report</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">User Reports</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->

          <!-- Search Filter -->

          <div class="row filter-row">
            
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                
                <vue-select :options="userrole" />
                
                <label class="focus-label">User Role</label>
              </div>
            </div>
          
            <div class="col-sm-6 col-md-3">  
              <a href="#" class="btn btn-success w-100"> Search </a>  
            </div>

          </div>
          <!-- /Search Filter -->
          
          <tableuserreport />
                
          <!-- /Content End -->
          
        
        
      
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {   
    },
    data() {
    return {
      userrole: ["Name1", "Name1"]
    }
    },
    mounted() {
    },
    name: 'userReport'
  }
</script>