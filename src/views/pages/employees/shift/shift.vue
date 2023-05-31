<template>
  <div class="shiftlist">
    
          
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col">
                <h3 class="page-title">Shift List</h3>
                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item"><a href="#">Employees</a></li>
                  <li class="breadcrumb-item active">Shift List</li>
                </ul>
                            </div>
                           
            </div>
          </div>
          <!-- /Page Header -->
          
          <shifttable />

  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'shift'
  }
</script>