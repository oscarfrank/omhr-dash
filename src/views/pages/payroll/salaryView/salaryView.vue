<template>
  <div class="salaryview">
        
          <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Payslip</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Payslip</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <div class="btn-group btn-group-sm">
                  <button class="btn btn-white">CSV</button>
                  <button class="btn btn-white">PDF</button>
                  <button class="btn btn-white"><i class="fa fa-print fa-lg"></i> Print</button>
                </div>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <salaryviewtable />

  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'salaryview'
  }
</script>