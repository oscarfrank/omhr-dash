<template>
  <div class="attendancereports">
    
          
        <attendreportheader />

        <attendreportfilter />
        
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Clock In</th>
                      <th>Clock Out</th>
                      <th>Work Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in attendancereport" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.date}}</td>
                      <td>{{item.clockin}}</td>
                      <td>{{item.clockout}}</td>
                      <td>{{item.workstatus}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
                
          <!-- /Content End -->
          
        
        
      
  </div>
</template>
<script>
  import attendancereport from '../../../../assets/json/attendancereport.json';
  import Vue from 'vue'
  export default {
     data() {
    return {
      attendancereport: attendancereport
    }
   },
    components: {
   
    },
    mounted() {


    },
    name: 'attendanceReport'
  }
</script>