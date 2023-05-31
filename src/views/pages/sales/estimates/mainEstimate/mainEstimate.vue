<template>
  <div class="estimates">
    
        
        <mainestimateheader />
          
        <mainestimatefilter />
          
        <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <mainestimatecontent />
              </div>
            </div>
          </div>
        
        
        <mainestimatemodal />
      
        
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'mainEstimate'
  }
</script>