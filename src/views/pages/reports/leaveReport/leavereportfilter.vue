<template>
  <!-- Search Filter -->
          <div class="row filter-row mb-4">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <input class="form-control floating" type="text">
                <label class="focus-label">Employee</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group form-focus select-focus">
                <vue-select :options="leavereportdepartment" />
                <label class="focus-label">Department</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <a href="#" class="btn btn-success w-100"> Search </a>  
            </div>     
                    </div>
          <!-- /Search Filter -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
    data() {
    return {
      leavereportdepartment: ["Select Department", "Designing", "Development", "Finance", "Hr & Finance"],
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</script>