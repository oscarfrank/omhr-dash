<template>
  <div class="userdashboard">
    
          
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">User Job Dashboard</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item">Jobs</li>
                  <li class="breadcrumb-item">User Dashboard</li>
                  <li class="breadcrumb-item">User Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->
          
          <jobheader /> 
          
          <userdashboardwidget />
                
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <usergraph />
                <userlatestjob />
              </div>
            </div>
          </div>

            
          <userlatestjobtable />
      
          <userappliedjobtable />
        
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
    name: 'userDashboard'
  }
</script>