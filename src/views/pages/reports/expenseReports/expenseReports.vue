<template>
  <div class="expensereports">
    
        
        <expensereportheader />
          
        <expensereportfilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <expensereportcontent />
              </div>
            </div>
          </div>
                
        
            
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {


    },
    name: 'expenseReports'
  }
</script>