<template>
  <div class="jobdetails">
    
        
         <headerjobdetails />
          
          <div class="row">
            <div class="col-md-8">
              <jobdetailsinfo />
              <jobdetailscontent />
            </div>
            <div class="col-md-4">
              <jobdetailsdetinfo />
            </div>
          </div>
        
        
       <modaljobdetails /> 
        
      
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'jobDetails'
  }
</script>