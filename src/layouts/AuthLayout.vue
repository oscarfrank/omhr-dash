<template>
    <div class="index">

            
                       <!--Start Router Content declaration-->
                        <router-view :key="$route.path" />
                      <!--End Router Content declaration-->
          
    </div>
  </template>
  <script>

    export default {
      components: {
     
      },
      mounted() {
      },
      methods: {
      },
      name: 'AuthLayout'
    }
  </script>