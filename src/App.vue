<template>
  <!-- <div id="app"> -->
      <component :is="layout" />
</template>


<script>
    import AdminLayout from "./layouts/AdminLayout";
    import DashboardLayout from "./layouts/DashboardLayout";
    import EmptyLayout from "./layouts/EmptyLayout";
    import AuthLayout from "./layouts/AuthLayout";
    import CallLayout from "./layouts/CallLayout";
    import ComponentLayout from "./layouts/ComponentLayout";
    import SettingsLayout from "./layouts/SettingsLayout";
    import TaskLayout from "./layouts/TaskLayout";

    import useComp from './composables/useComp';
  
  export default {
    name: 'App',
    components: {
      AdminLayout,
      AuthLayout,
      CallLayout,
      ComponentLayout,
      DashboardLayout,
      EmptyLayout,
      SettingsLayout,
      TaskLayout,
    },
    data() {
      return {
        layout: null,
      };
    },
    setup(){
            const { config, user } = useComp();
  
            return { config, user }
  
              },
    // created(){
    beforeCreate(){
      this.config.fetchSettings(); // Fetch Site Settings
  
    },
  
    watch: {
      $route(to) {
        // set layout by route meta
        if (to.meta.layout !== undefined) {
          this.layout = to.meta.layout
        } else {
          this.layout = "DashboardLayout" // this is default layout if route meta is not set
        }
      },
    },
  
  }
  </script>
    