<template>

<!-- Add Training List Modal -->
        <div id="add_training" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add New Training</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Training Type</label>
                        <vue-select :options="addtraining" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Trainer</label>
                        <vue-select :options="addtrainer" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Employees</label>
                        <vue-select :options="addemployees" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Training Cost <span class="text-danger">*</span></label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Start Date <span class="text-danger">*</span></label>
                        <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>End Date <span class="text-danger">*</span></label>
                        <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>Description <span class="text-danger">*</span></label>
                        <textarea class="form-control" rows="4"></textarea>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <vue-select :options="addstatus" />
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
        <!-- /Add Training List Modal -->
        
        <!-- Edit Training List Modal -->
        <div id="edit_training" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Training List</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Training Type</label>
                        <vue-select :options="edittraining" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Trainer</label>
                        <vue-select :options="edittrainer" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Employees</label>
                        <vue-select :options="editemployees" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Training Cost <span class="text-danger">*</span></label>
                        <input class="form-control" type="text" value="$400">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Start Date <span class="text-danger">*</span></label>
                        <div class="cal-icon">
                          <datepicker v-model="startdate1"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>End Date <span class="text-danger">*</span></label>
                        <div class="cal-icon">
                          <datepicker v-model="enddate1"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>Description <span class="text-danger">*</span></label>
                        <textarea class="form-control" rows="4">Lorem ipsum ismap</textarea>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <vue-select :options="editstatus" />
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
        <!-- /Edit Training List Modal -->
        
        <!-- Delete Training List Modal -->
        <div class="modal custom-modal fade" id="delete_training" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Training List</h3>
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
        <!-- /Delete Training List Modal -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  const currentDate2 = ref(new Date())
  const currentDate3 = ref(new Date())
  export default {
    components: {   
    },
    data() {
    return {
      addtraining: ["Node Training", "Swift Training"],
      addtrainer: ['Mike Litorus', 'John Doe'],
      addemployees: ['Bernardo Galaviz', 'Jeffrey Warden'],
      addstatus: ['Active', 'Inactive'],
      edittraining: ["Node Training", "Swift Training"],
      edittrainer: ['Mike Litorus', 'John Doe'],
      editemployees: ['Bernardo Galaviz', 'Jeffrey Warden'],
      editstatus: ['Active', 'Inactive'],
      startdate: currentDate,
      enddate: currentDate1,
      startdate1: currentDate2,
      enddate1: currentDate3
    }
    },
    mounted() {
    }
  }
</script>