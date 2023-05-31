<template>
  <div class="leavesettings">
    
        
        <headerleavesetting />
          
          <div class="row">
            <div class="col-md-12">
            
              <annualleavesetting />
              
              <sickleavesetting/>
              
              <hospitalleavesetting />
              
              <maternityleavesetting />
              
              <paternityleavesetting />
              
              <createleavesetting />
              
            </div>
          </div>
            
        
        
        <modalleavesetting />
        
      
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'leavesettings'
  }
</script>