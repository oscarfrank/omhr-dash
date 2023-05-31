<template>

<!-- Add Modal -->
        <div class="modal custom-modal fade" id="add_categories" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Expenses</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row">
                            <label class="col-lg-12 control-label">Amount <span class="text-danger">*</span></label>
                            <div class="col-lg-6">
                                <input type="text" class="form-control" placeholder="800.00" name="amount">
                            </div>
                            <div class="col-lg-6">
                                <vue-select :options="addcurrenysymbol" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-12 control-label">Notes <span class="text-danger">*</span></label>
                            <div class="col-lg-12">
                                <textarea class="form-control ta" name="notes"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-12 control-label">Expense Date <span class="text-danger">*</span></label>
                            <div class="col-lg-12">
                                <input class="datepicker-input form-control" type="text" value="07-05-2021" name="expense_date" data-date-format="dd-mm-yyyy">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-12 control-label">Category <span class="text-danger">*</span></label>
                            <div class="col-lg-12">
                                <vue-select :options="addcategory" />
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <label class="col-lg-12 control-label">Sub Category <span class="text-danger">*</span></label>
                            <div class="col-lg-12">
                                <vue-select :options="addsubcategory" />
                            </div>
                        </div>
                        <div class="form-group row  position-relative">
                            <label class="col-lg-12 control-label">Attach File</label>
                            <div class="col-lg-12">
                                
                                <input type="file" class="form-control" data-buttontext="Choose File" data-icon="false" data-classbutton="btn btn-default" data-classinput="form-control inline input-s" name="receipt">
                            </div>
                        </div>
                        <div class="submit-section">
                            <button class="btn btn-primary submit-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Add Modal -->

        <!-- Edit Modal -->
        <div class="modal custom-modal fade" id="edit_categories" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Expenses</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                      <div class="modal-body">
                        <div class="form-group row">
                            <label class="col-lg-12 control-label">Amount <span class="text-danger">*</span></label>
                            <div class="col-lg-6">
                                <input type="text" class="form-control" placeholder="800.00" name="amount">
                            </div>
                            <div class="col-lg-6">
                                <vue-select :options="editcurrenysymbol" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-12 control-label">Notes <span class="text-danger">*</span></label>
                            <div class="col-lg-12">
                                <textarea class="form-control ta" name="notes"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-12 control-label">Expense Date <span class="text-danger">*</span></label>
                            <div class="col-lg-12">
                                <input class="datepicker-input form-control" type="text" value="07-05-2021" name="expense_date" data-date-format="dd-mm-yyyy">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-12 control-label">Category <span class="text-danger">*</span></label>
                            <div class="col-lg-12">
                                <vue-select :options="editcategory" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-12 control-label">Sub Category <span class="text-danger">*</span></label>
                            <div class="col-lg-12">
                                <vue-select :options="editsubcategory" />
                            </div>
                        </div>
                        <div class="form-group row  position-relative">
                            <label class="col-lg-12 control-label">Attach File</label>
                            <div class="col-lg-12">
                                
                                <input type="file" class="form-control" data-buttontext="Choose File" data-icon="false" data-classbutton="btn btn-default" data-classinput="form-control inline input-s" name="receipt">
                            </div>
                        </div>
                        <div class="submit-section">
                            <button class="btn btn-primary submit-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Edit Modal -->

        <!-- Delete Holiday Modal -->
        <div class="modal custom-modal fade" id="delete" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete </h3>
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
        <!-- /Delete Holiday Modal -->
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      addcurrenysymbol: ["$ - Australian Dollar", "Bs. - Bolívar Fuerte", "R$ - Brazilian Real", "£ - British Pound", "$ - Canadian Dollar"],
      addcategory: ["Choose Category", "project1", "test category", "Hardware", "Material", "Vehicle", "TestctrE", "Twocatr", "fesferwf"],
      addsubcategory: ["Choose Sub-Category"],
      editcurrenysymbol: ["$ - Australian Dollar", "Bs. - Bolívar Fuerte", "R$ - Brazilian Real", "£ - British Pound", "$ - Canadian Dollar"],
      editcategory: ["Choose Category", "project1", "test category", "Hardware", "Material", "Vehicle", "TestctrE", "Twocatr", "fesferwf"],
      editsubcategory: ["Choose Sub-Category"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</script>