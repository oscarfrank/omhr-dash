<template>
<!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group form-focus select-focus">
                <vue-select :options="attendancefilter" />
                <label class="focus-label">Select Month</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group form-focus select-focus">
                <vue-select :options="attendanceyear" />
                <label class="focus-label">Select Year</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="d-grid">
                <a href="#" class="btn btn-success"> Search </a>  
              </div>
            </div>     
                    </div>
          <!-- /Search Filter -->
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      attendancefilter: ["-", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      attendanceyear: ["-", "2019", "2018", "2017", "2016", "2015"]

    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</script>