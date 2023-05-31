<template>
  <div class="tickets">
        
          <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Tickets</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Tickets</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a href="#" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_ticket"><i class="fa fa-plus"></i> Add Ticket</a>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <mainwidget />
          
          <mainfilter />
          
          <maintable />
                
        
        
        <mainticketmodal />
        
      
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {  
    },
    mounted() {
    },
    name: 'mainTicket'
  }
</script>