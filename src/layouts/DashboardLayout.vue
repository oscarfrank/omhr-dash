<template>
    <div class="index">
      <div class="main-wrapper">
        <main-header></main-header>
        <sidebar></sidebar>
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

    import { computed } from 'vue';


    import useComp from '../composables/useComp';

    export default {
      components: {
     
      },
      setup() {
      const { user: userData } = useComp(); 
                
      const user = computed( ()=> userData.user );


      return {
            user // Composables
        };

    },
      mounted() {
      },
      methods: {
      },
      name: 'DashboardLayout'
    }
  </script>