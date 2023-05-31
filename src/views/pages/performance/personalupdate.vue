<template>
  <section class="review-section">
            <div class="review-header text-center">
              <h3 class="review-title">Personal Updates</h3>
              <p class="text-muted">Lorem ipsum dollar</p>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-bordered review-table mb-0">
                    <thead>
                      <tr>
                        <th style="width:40px;">#</th>
                        <th>Last Year</th>
                        <th>Yes/No</th>
                        <th>Details</th>
                        <th>Current Year</th>
                        <th>Yes/No</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Married/Engaged?</td>
                        <td>
                          <vue-select :options="personaldetail" /> 
                        </td>
                        <td><input type="text" class="form-control" ></td>
                        <td>Marriage Plans</td>
                        <td>
                          <vue-select :options="personaldetail1" /> 
                        </td>
                        <td><input type="text" class="form-control" ></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Higher Studies/Certifications?</td>
                        <td>
                          <vue-select :options="personaldetail2" /> 
                        </td>
                        <td><input type="text" class="form-control" ></td>
                        <td>Plans For Higher Study</td>
                        <td>
                          <vue-select :options="personaldetail3" /> 
                        </td>
                        <td><input type="text" class="form-control" ></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Health Issues?</td>
                        <td>
                          <vue-select :options="personaldetail4" /> 
                        </td>
                        <td><input type="text" class="form-control" ></td>
                        <td>Certification Plans</td>
                        <td>
                          <vue-select :options="personaldetail5" /> 
                        </td>
                        <td><input type="text" class="form-control" ></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Others</td>
                        <td>
                          <vue-select :options="personaldetail6" /> 
                        </td>
                        <td><input type="text" class="form-control" ></td>
                        <td>Others</td>
                        <td>
                          <vue-select :options="personaldetail7" /> 
                        </td>
                        <td><input type="text" class="form-control" ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          
          <section class="review-section">
            <div class="review-header text-center">
              <h3 class="review-title">Professional Goals Achieved for last year</h3>
              <p class="text-muted">Lorem ipsum dollar</p>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-bordered table-review review-table mb-0" id="table_goals">
                    <thead>
                      <tr>
                        <th style="width:40px;">#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th style="width: 64px;"><button type="button" class="btn btn-primary btn-add-row"><i class="fa fa-plus"></i></button></th>
                      </tr>
                    </thead>
                    <tbody id="table_goals_tbody">
                      <tr>
                        <td>1</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          
          <section class="review-section">
            <div class="review-header text-center">
              <h3 class="review-title">Professional Goals for the forthcoming year</h3>
              <p class="text-muted">Lorem ipsum dollar</p>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-bordered table-review review-table mb-0" id="table_forthcoming">
                    <thead>
                      <tr>
                        <th style="width:40px;">#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th style="width: 64px;"><button type="button" class="btn btn-primary btn-add-row"><i class="fa fa-plus"></i></button></th>
                      </tr>
                    </thead>
                    <tbody id="table_forthcoming_tbody">
                      <tr>
                        <td>1</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td><input type="text" class="form-control" ></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      personaldetail: ["Select", "Yes", "No"],
      personaldetail1: ["Select", "Yes", "No"],
      personaldetail2: ["Select", "Yes", "No"],
      personaldetail3: ["Select", "Yes", "No"],
      personaldetail4: ["Select", "Yes", "No"],
      personaldetail5: ["Select", "Yes", "No"],
      personaldetail6: ["Select", "Yes", "No"],
      personaldetail7: ["Select", "Yes", "No"]

    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</script>