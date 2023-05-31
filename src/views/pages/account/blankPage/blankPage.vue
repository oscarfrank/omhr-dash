<template>
  <div class="blankpage">
    
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Blank Page</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Blank Page</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->
          Some Important Pages
          <li><router-link to="/components">Components</router-link></li>
          <li><router-link to="/form-basic-inputs">Basic Inputs</router-link></li>
          <li><router-link to="/form-input-groups">Form Input Groups</router-link></li>
          <li><router-link to="/form-horizontal">Horizontal Form</router-link></li>
          <li><router-link to="/form-vertical">Vertical Form</router-link></li>
          <li><router-link to="/form-mask">Form Mask</router-link></li>
          <li><router-link to="/form-validation">Validation Forms</router-link></li>
          
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {
    },
    name: 'blankPage'
  }
</script>