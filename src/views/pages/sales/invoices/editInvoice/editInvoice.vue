<template>
  <div class="editinvoice">
    
        
        <editinvoiceheader />
          
          <div class="row">
            <div class="col-md-12">
              <form>
                <editinvoicefilter />
                <editinvoicetable />
                <div class="submit-section">
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
    name: 'editInvoice'
  }
</script>