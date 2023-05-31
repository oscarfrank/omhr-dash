<template>
  <div class="shiftscheduling">
    
          
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col">
                <h3 class="page-title">Daily Scheduling</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item"><router-link to="/employees">Employees</router-link></li>
                                    <li class="breadcrumb-item active">Shift Scheduling</li>
                </ul>
                            </div>
                            
            </div>
          </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->
          <!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee</label>
              </div>
            </div>
            
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group form-focus select-focus">
              <vue-select :options="schedulingdepartment" />
                <label class="focus-label">Department</label>
              </div>
                        </div>
                        <div class="col-sm-6 col-md-2">  
              <div class="form-group form-focus focused">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
                        </div>
                        <div class="col-sm-6 col-md-2">  
              <div class="form-group form-focus focused">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
            <div class="col-sm-6 col-md-2">  
              <a href="#" class="btn btn-success w-100"> Search </a>  
            </div>     
                    </div>
          <!-- Search Filter -->

          <schedulingtable />

          <!-- /Content End -->
          
      
  </div>
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
     data() {
    return {
      schedulingdepartment: ["All Department", "Finance", "Finance and Management", "Hr & Finance", "ITech"],
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
   
    },
    mounted() {
    },
    name: 'scheduling'
  }
</script>