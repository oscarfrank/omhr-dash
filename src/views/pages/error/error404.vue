<template>
  <div class="error404 error-page" style="height: 100vh;">
      
      <div class="error-box">
        <h1>404</h1>
        <h3><i class="fa fa-warning"></i> Oops! Page not found!</h3>
        <p>The page you requested was not found.</p>
        <router-link to="/" class="btn btn-custom">Back to Home</router-link>
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
    name: 'error404'
  }
</script>