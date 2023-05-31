<template>
    <div class="index">
      <div class="main-wrapper">
        <componentheader></componentheader>
        <mailsidebar></mailsidebar>
         <!-- Page Wrapper -->
         <div class="page-wrapper">
          <!-- Page Content -->
          <div class="content container-fluid">
            
                       <!--Start Router Content declaration-->
                        <router-view :key="$route.path" />
                      <!--End Router Content declaration-->
          
          
          </div>
          <!-- /Page Content -->
          </div>
        <!-- /Page Wrapper -->
      </div>
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
      name: 'EmailLayout'
    }
  </script>