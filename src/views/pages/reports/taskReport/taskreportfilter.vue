<template>
<div class="row filter-row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
               <vue-select :options="taskreportprojectname" />
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
              <vue-select :options="taskreportstatus" />
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <a href="#" class="btn btn-success w-100"> Search </a>  
            </div>     
          </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      taskreportprojectname: ["Name1", "Name2"],
      taskreportstatus: ["All", "Pending", "Completed"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</script>