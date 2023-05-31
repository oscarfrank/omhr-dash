<template>

          <div class="row filter-row">
            <div class="col-sm-3">  
              <div class="form-group form-focus">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                </div>
                
              </div>
            </div>
            <div class="col-sm-3"> 
              <div class="form-group form-focus select-focus">
                <vue-select :options="addattenemployeemonth" />
                <label class="focus-label">Select Month</label>
              </div>
            </div>
            <div class="col-sm-3"> 
              <div class="form-group form-focus select-focus">
                <vue-select :options="addattenemployeeyear" />
                <label class="focus-label">Select Year</label>
              </div>
            </div>
            <div class="col-sm-3">  
              <div class="d-grid">
                <a href="#" class="btn btn-success"> Search </a>  
              </div>
            </div>     
          </div>
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  export default {
     data() {
    return {
      addattenemployeemonth: ["-", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      addattenemployeeyear: ["-", "2019", "2018", "2017", "2016", "2015"],
      startdate: currentDate,
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</script>