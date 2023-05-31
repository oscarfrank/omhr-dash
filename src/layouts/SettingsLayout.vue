<template>
  <div class="change-password">
    <div class="main-wrapper">
       <main-header></main-header>
      <settingsidebar></settingsidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
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
      name: 'SettingsLayout'
    }
  </script>