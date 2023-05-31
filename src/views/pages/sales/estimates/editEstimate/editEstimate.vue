<template>
  <div class="editestimate">
    
        
         <editestimateheader />
          
          <div class="row">
            <div class="col-md-12">
              <form>
                <editestimatefilter />
                <editestimatetable />
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
    name: 'editEstimate'
  }
</script>