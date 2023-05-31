<template>
    <!-- Search Filter -->
          <div class="row filter-row">
            
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                  <vue-select :options="projectreportname" />
                <label class="focus-label">Project Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                  <vue-select :options="projectreportstatus" />
                <label class="focus-label">Status</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <a href="#" class="btn btn-success w-100"> Search </a>  
            </div>     
           </div>
          <!-- /Search Filter -->
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      projectreportname: ["Name1", "Name1"],
      projectreportstatus: ["Active", "Pending"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</script>