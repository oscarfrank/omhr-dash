<template>
  <div class="visitedjobs">
    
          
          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Visitied Jobs</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item ">Jobs</li>
                  <li class="breadcrumb-item">User Dashboard</li>
                  <li class="breadcrumb-item active">Visitied Jobs</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->
           <jobheader /> 
          
          <!-- Search Filter -->
          <div class="row filter-row">
          <searchfilter />
          </div>
          <!-- Search Filter -->

           <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="archivedjobs">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Job Title</th>
                      <th>Department</th>
                      <th>Start Date</th>
                      <th>Expire Date</th>
                      <th class="text-center">Job Type</th>
                      <th class="text-center">Status</th>
                      <th class="text-center">Actions</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in appliedjob" :key="item.id">
                      <td>{{item.no}}</td>
                      <td><router-link to="/job-details">{{item.jobtitle}}</router-link></td>
                      <td>{{item.department}}</td>
                      <td>{{item.startdate}}</td>
                      <td>{{item.expiredate}}</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.jobtype}}
                          </a>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="btn btn-white btn-sm btn-rounded" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.status}}
                          </a>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
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
  import appliedjob from '../../../../assets/json/appliedjob.json';
  import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
    appliedjob: appliedjob
    }
    },
    components: {
   
    },
    mounted() {
    util.datatable('#archivedjobs')
    },
    name: 'visitedJobs'
  }
</script>