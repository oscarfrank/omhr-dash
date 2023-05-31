<template>
  <div class="employeereports">
    
          
        
        <employeereportheader />
          
        <!-- Content Starts -->
            
        <employeereportfilter />

          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <employeereporttable />
              </div>
            </div>
          </div>
          
                
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
    name: 'employeeReports'
  }
</script>