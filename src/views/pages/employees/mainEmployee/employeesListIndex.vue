<template>
  <div class="employeeslist">
    
        
         <employeeheader />
          
         <employeefilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <employeelistcontent />
              </div>
            </div>
          </div>
                
        
        <employeemodal />
        
            
  </div>
</template>
<script>
import employeefilterVue from './employeefilter.vue';
import employeeheaderVue from './employeeheader.vue';
import employeeslistcontentVue from './employeeslistcontent.vue';
  export default {
    methods: {
      

    },
    components: {
      employeefilter: employeefilterVue,
      employeeheader: employeeheaderVue,
      employeelistcontent: employeeslistcontentVue,
   
    },
    mounted() {

    },
    name: 'employeesListIndex'
  }
</script>