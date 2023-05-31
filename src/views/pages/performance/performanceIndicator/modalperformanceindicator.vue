<template>
<!-- Add Performance Indicator Modal -->
        <div id="add_indicator" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Set New Indicator</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Designation</label>
                        <vue-select :options="adddesignationindicator" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Technical</h4>
                      <div class="form-group">
                        <label class="col-form-label">Customer Experience</label>
                        <vue-select :options="addtechnicalindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Marketing</label>
                        <vue-select :options="addmarketingindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Management</label>
                        <vue-select :options="addmanagementindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Administration</label>
                        <vue-select :options="addadministratorindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Presentation Skill</label>
                        <vue-select :options="addpresentationindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Quality Of Work</label>
                        <vue-select :options="addqualityofworkindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Efficiency</label>
                        <vue-select :options="addefficiencyindicator" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Organizational</h4>
                      <div class="form-group">
                        <label class="col-form-label">Integrity</label>
                        <vue-select :options="addorganizationalindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Professionalism</label>
                        <vue-select :options="addprofessionalismindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Team Work</label>
                        <vue-select :options="addteamworkindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Critical Thinking</label>
                        <vue-select :options="addcriticalthinkingindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Conflict Management</label>
                        <vue-select :options="addconflictmanagementindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Attendance</label>
                        <vue-select :options="addattendanceindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Ability To Meet Deadline</label>
                        <vue-select :options="addmeetindicator" />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <vue-select :options="addstatusindicator" />
                      </div>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Performance Indicator Modal -->
        
        <!-- Edit Performance Indicator Modal -->
        <div id="edit_indicator" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Performance Indicator</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Designation</label>
                        <vue-select :options="editdesignationindicator" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h4 class="modal-sub-title">Technical</h4>
                      <div class="form-group">
                        <label class="col-form-label">Customer Experience</label>
                        <vue-select :options="edittechnicalindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Marketing</label>
                        <vue-select :options="editmarketingindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Management</label>
                        <vue-select :options="editmanagementindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Administration</label>
                        <vue-select :options="editadministratorindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Presentation Skill</label>
                        <vue-select :options="editpresentationindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Quality Of Work</label>
                        <vue-select :options="editqualityofworkindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Efficiency</label>
                        <vue-select :options="editefficiencyindicator" />
                      </div>
                    </div>
                        <div class="col-sm-6">
                      <h4 class="modal-sub-title">Organizational</h4>
                      <div class="form-group">
                        <label class="col-form-label">Integrity</label>
                        <vue-select :options="editorganizationalindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Professionalism</label>
                        <vue-select :options="editprofessionalismindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Team Work</label>
                        <vue-select :options="editteamworkindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Critical Thinking</label>
                       <vue-select :options="editcriticalthinkingindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Conflict Management</label>
                         <vue-select :options="editconflictmanagementindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Attendance</label>
                        <vue-select :options="editattendanceindicator" />
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Ability To Meet Deadline</label>
                        <vue-select :options="editmeetindicator" />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <vue-select :options="addstatusindicator" />
                      </div>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Performance Indicator Modal -->
        
        <!-- Delete Performance Indicator Modal -->
        <div class="modal custom-modal fade" id="delete_indicator" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Performance Indicator List</h3>
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
        <!-- /Delete Performance Indicator Modal -->
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      adddesignationindicator: ["Select Designation", "Web Designer", "IOS Developer"],
      addtechnicalindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addmarketingindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addmanagementindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addadministratorindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addpresentationindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addqualityofworkindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addefficiencyindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addorganizationalindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addprofessionalismindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addteamworkindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addcriticalthinkingindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addconflictmanagementindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addattendanceindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addmeetindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      addstatusindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],

      editdesignationindicator: ["Select Designation", "Web Designer", "IOS Developer"],
      edittechnicalindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editmarketingindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editmanagementindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editadministratorindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editpresentationindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editqualityofworkindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editefficiencyindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editorganizationalindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editprofessionalismindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editteamworkindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editcriticalthinkingindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editconflictmanagementindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editattendanceindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editmeetindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      editstatusindicator: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"]

    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</script>