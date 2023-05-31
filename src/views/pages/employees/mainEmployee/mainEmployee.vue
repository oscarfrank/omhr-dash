<template>
  <div class="employees">
    
        
         <employeeheader />
          
         <employeefilter />
          
         <employeecontent />
         
        
         <employeemodal />
        
        
  </div>
</template>
<script>
import employeefilterVue from './employeefilter.vue'
  export default {
    components: {
      employeefilter: employeefilterVue
   
    },
    mounted() {

    },
    name: 'mainEmployee'
  }
</script>