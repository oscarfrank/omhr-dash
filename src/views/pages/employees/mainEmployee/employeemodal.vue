<template>
<!-- Add Employee Modal -->
        <div id="add_employee" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Employee</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">First Name <span class="text-danger">*</span></label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Last Name</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Username <span class="text-danger">*</span></label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Email <span class="text-danger">*</span></label>
                        <input class="form-control" type="email">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Password</label>
                        <input class="form-control" type="password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Confirm Password</label>
                        <input class="form-control" type="password">
                      </div>
                    </div>
                    <div class="col-sm-6">  
                      <div class="form-group">
                        <label class="col-form-label">Employee ID <span class="text-danger">*</span></label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-sm-6">  
                      <div class="form-group">
                        <label class="col-form-label">Joining Date <span class="text-danger">*</span></label>
                        <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Phone </label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Company</label>
                         <vue-select :options="addempcompany" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Department <span class="text-danger">*</span></label>
                         <vue-select :options="addempdepartment" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Designation <span class="text-danger">*</span></label>
                         <vue-select :options="addempdesignation" />
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive m-t-15">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th class="text-center">Read</th>
                          <th class="text-center">Write</th>
                          <th class="text-center">Create</th>
                          <th class="text-center">Delete</th>
                          <th class="text-center">Import</th>
                          <th class="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Holidays</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Clients</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Projects</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Tasks</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Chats</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Assets</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Timing Sheets</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Employee Modal -->
        
        <!-- Edit Employee Modal -->
        <div id="edit_employee" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Employee</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">First Name <span class="text-danger">*</span></label>
                        <input class="form-control" value="John" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Last Name</label>
                        <input class="form-control" value="Doe" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Username <span class="text-danger">*</span></label>
                        <input class="form-control" value="johndoe" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Email <span class="text-danger">*</span></label>
                        <input class="form-control" value="johndoe@example.com" type="email">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Password</label>
                        <input class="form-control" value="johndoe" type="password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Confirm Password</label>
                        <input class="form-control" value="johndoe" type="password">
                      </div>
                    </div>
                    <div class="col-sm-6">  
                      <div class="form-group">
                        <label class="col-form-label">Employee ID <span class="text-danger">*</span></label>
                        <input type="text" value="FT-0001" readonly class="form-control floating">
                      </div>
                    </div>
                    <div class="col-sm-6">  
                      <div class="form-group">
                        <label class="col-form-label">Joining Date <span class="text-danger">*</span></label>
                        <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Phone </label>
                        <input class="form-control" value="9876543210" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Company</label>
                         <vue-select :options="editempcompany" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Department <span class="text-danger">*</span></label>
                         <vue-select :options="editempdepartment" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Designation <span class="text-danger">*</span></label>
                         <vue-select :options="editempdesignation" />
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive m-t-15">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th class="text-center">Read</th>
                          <th class="text-center">Write</th>
                          <th class="text-center">Create</th>
                          <th class="text-center">Delete</th>
                          <th class="text-center">Import</th>
                          <th class="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Holidays</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Clients</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Projects</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Tasks</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Chats</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Assets</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Timing Sheets</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                          <td class="text-center">
                            <input type="checkbox">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Employee Modal -->
        
        <!-- Delete Employee Modal -->
        <div class="modal custom-modal fade" id="delete_employee" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Employee</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
                    </div>
                    <div class="col-6">
                      <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Delete Employee Modal -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
     data() {
    return {
      addempcompany: ["Global Technologies", "Delta Infotech", "International Software Inc"],
      addempdepartment: ["Select Department", "Web Development", "IT Management", "Marketing"],
      addempdesignation: ["Select Designation", "Web Designer", "Web Developer", "Android Developer"],
      editempdepartment: ["Select Department", "Web Development", "IT Management", "Marketing"],
      editempdesignation: ["Select Designation", "Web Designer", "Web Developer", "Android Developer"],
      editempcompany: ["Global Technologies", "Delta Infotech", "International Software Inc"],
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