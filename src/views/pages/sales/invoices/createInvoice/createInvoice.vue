<template>
  <div class="createinvoice">
    
        
        <createinvoiceheader />
          
          <div class="row">
            <div class="col-sm-12">
              <form>
              
              <createinvoicefilter />
              <createinvoicetable />  
                
                <div class="submit-section">
                  <button class="btn btn-primary submit-btn m-r-10">Save & Send</button>
                  <button class="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
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
    name: 'createInvoice'
  }
</script>