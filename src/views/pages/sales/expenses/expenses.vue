<template>
  <div class="expenses">
    
        
        <expenseheader />
          
        <expensefilter />
          
        <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <expensetable />
              </div>
            </div>
        </div>
        
        
        <expensemodal />
        
      
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {


    },
    name: 'expenses'
  }
</script>