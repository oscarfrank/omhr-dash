<template>
  <div class="jobs">
    
        
        <headermainjob />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <mainjobcontent />
              </div>
            </div>
          </div>
                
        
        <modalmainjob />
        
        
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'mainJobs'
  }
</script>