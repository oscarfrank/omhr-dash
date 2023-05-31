<template>
<!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee Name</label>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12"> 
              <div class="form-group form-focus select-focus">
              <vue-select :options="ticketstatus" />      
                <label class="focus-label">Status</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12"> 
              <div class="form-group form-focus select-focus">
              <vue-select :options="ticketpriority" />
                <label class="focus-label">Priority</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group form-focus">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group form-focus">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
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
      ticketstatus: ["-- Select --", "Pending", "Approved", "Returned"],
      ticketpriority: ["-- Select --", "High", "Low", "Medium"],
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</script>