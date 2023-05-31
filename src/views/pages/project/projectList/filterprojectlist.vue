<template>

  <!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Project Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group form-focus select-focus">
                <vue-select :options="projectlistrole" />
                <label class="focus-label">Role</label>
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
      projectlistrole: ["Select Roll", "Web Developer", "Web Designer", "Android Developer", "Ios Developer"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</script>