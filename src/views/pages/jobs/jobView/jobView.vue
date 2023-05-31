<template>
  <div class="jobview">

        
        <headerjobview />
          
        <div class="row">
            <div class="col-md-8">
              <infojobview />
              <contentjobview />
            </div>
            <div class="col-md-4">
             <jobviewcontent />
            </div>
          </div>
        
        
        <modaljobview />
      
      
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {


    },
    name: 'jobView'
  }
</script>