<template>
  <div class="useralljobs">
    
          
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">All Jobs</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item ">Jobs</li>
                  <li class="breadcrumb-item">User Dashboard</li>
                  <li class="breadcrumb-item active">All Jobs</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->
          
          <jobheader /> 
          
          <searchfilter />
  
          <useralljobtable />
        
          <!-- /Content End -->
          
        
        
      
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
    },
    mounted() {
    },
    name: 'userAllJobs'
  }
</script>