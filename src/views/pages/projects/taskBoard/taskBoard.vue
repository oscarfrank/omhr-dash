<template>
  <div class="taskboard">

        
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Hospital Admin</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Task Board</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <taskboardetail />
          
        
      <taskboardmodal />

  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {
  
    },
    name: 'taskBoard'
  }
</script>