<template>
<!-- Profile Modal -->
        <div id="profile_info" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Profile Information</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="profile-img-wrap edit-img">
                        <img class="inline-block" src="../../../assets/img/profiles/avatar-02.jpg" alt="user">
                        <div class="fileupload btn">
                          <span class="btn-text">edit</span>
                          <input class="upload" type="file">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>First Name</label>
                            <input type="text" class="form-control" v-model="user.firstName">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" class="form-control" v-model="user.lastName">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Birth Date</label>
                            <div class="cal-icon">
                              <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Gender</label>
                            <vue-select :options="gender" v-model="user.gender" />
                            <!-- <vue-select :options="gender" /> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" v-model="user.street">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>State</label>
                        <input type="text" class="form-control" v-model="user.state">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Country</label>
                        <vue-select :options="country" v-model="user.country" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Zip Code</label>
                        <input type="text" class="form-control" v-model="user.zip">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Phone Number</label>
                        <input type="text" class="form-control" v-model="user.phone">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Department <span class="text-danger">*</span></label>
                        <vue-select :options="department" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Designation <span class="text-danger">*</span></label>
                        <vue-select :options="designation" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Reports To <span class="text-danger">*</span></label>
                        <vue-select :options="reports" />
                      </div>
                    </div>
                  </div>
                  <div class="submit-section">
                    <loading-button color="btn btn-primary submit-btn" :isLoading="isLoading" @click.prevent="editProfile">Submit</loading-button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Profile Modal -->
        
        <!-- Personal Info Modal -->
        <div id="personal_info_modal" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Personal Information</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Passport No</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Passport Expiry Date</label>
                        <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Tel</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Nationality <span class="text-danger">*</span></label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Religion</label>
                        <div class="cal-icon">
                          <input class="form-control" type="text">
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Marital status <span class="text-danger">*</span></label>
                        <vue-select :options="relationshipStatus" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Employment of spouse</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>No. of children </label>
                        <input class="form-control" type="text">
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
        <!-- /Personal Info Modal -->
        
        <!-- Family Info Modal -->
        <div id="family_info_modal" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title"> Family Information</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-scroll">
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title">Family Member <a href="javascript:void(0);" class="delete-icon"><i class="fa fa-trash-o"></i></a></h3>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Name <span class="text-danger">*</span></label>
                              <input class="form-control" type="text">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Relationship <span class="text-danger">*</span></label>
                              <input class="form-control" type="text">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Date of birth <span class="text-danger">*</span></label>
                              <input class="form-control" type="text">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Phone <span class="text-danger">*</span></label>
                              <input class="form-control" type="text">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title">Education Information <a href="javascript:void(0);" class="delete-icon"><i class="fa fa-trash-o"></i></a></h3>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Name <span class="text-danger">*</span></label>
                              <input class="form-control" type="text">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Relationship <span class="text-danger">*</span></label>
                              <input class="form-control" type="text">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Date of birth <span class="text-danger">*</span></label>
                              <input class="form-control" type="text">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Phone <span class="text-danger">*</span></label>
                              <input class="form-control" type="text">
                            </div>
                          </div>
                        </div>
                        <div class="add-more">
                          <a href="javascript:void(0);"><i class="fa fa-plus-circle"></i> Add More</a>
                        </div>
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
        <!-- /Family Info Modal -->
        
        <!-- Emergency Contact Modal -->
        <div id="emergency_contact_modal" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Personal Information</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="card">
                    <div class="card-body">
                      <h3 class="card-title">Primary Contact</h3>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Relationship <span class="text-danger">*</span></label>
                            <input class="form-control" type="text">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Phone <span class="text-danger">*</span></label>
                            <input class="form-control" type="text">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Phone 2</label>
                            <input class="form-control" type="text">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card">
                    <div class="card-body">
                      <h3 class="card-title">Primary Contact</h3>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Relationship <span class="text-danger">*</span></label>
                            <input class="form-control" type="text">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Phone <span class="text-danger">*</span></label>
                            <input class="form-control" type="text">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Phone 2</label>
                            <input class="form-control" type="text">
                          </div>
                        </div>
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
        <!-- /Emergency Contact Modal -->
        
        <!-- Education Modal -->
        <div id="education_info" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title"> Education Information</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-scroll">
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title">Education Information <a href="javascript:void(0);" class="delete-icon"><i class="fa fa-trash-o"></i></a></h3>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <input type="text" value="Oxford University" class="form-control floating">
                             
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <input type="text" value="Computer Science" class="form-control floating">
                            
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <div class="cal-icon">
                            <datepicker v-model="startdate1"  class="picker" 
                              :editable="true"
                              :clearable="false" />
                            </div>
                              
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <div class="cal-icon">
                              <datepicker v-model="enddate1"  class="picker" 
                              :editable="true"
                              :clearable="false" />
                              </div>
                             
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <input type="text" value="BE Computer Science" class="form-control floating">
                              
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <input type="text" value="Grade A" class="form-control floating">
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title">Education Information <a href="javascript:void(0);" class="delete-icon"><i class="fa fa-trash-o"></i></a></h3>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <input type="text" value="Oxford University" class="form-control floating">
                              <label class="focus-label">Institution</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <input type="text" value="Computer Science" class="form-control floating">
                              <label class="focus-label">Subject</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <div class="cal-icon">
                            <datepicker v-model="startdate2"  class="picker" 
                              :editable="true"
                              :clearable="false" />
                            </div>
                           
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <div class="cal-icon">
                            <datepicker v-model="enddate2"  class="picker" 
                               :editable="true"
                               :clearable="false" />
                               </div>
                              
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <input type="text" value="BE Computer Science" class="form-control floating">
                              <label class="focus-label">Degree</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus focused">
                              <input type="text" value="Grade A" class="form-control floating">
                              <label class="focus-label">Grade</label>
                            </div>
                          </div>
                        </div>
                        <div class="add-more">
                          <a href="javascript:void(0);"><i class="fa fa-plus-circle"></i> Add More</a>
                        </div>
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
        <!-- /Education Modal -->
        
        <!-- Experience Modal -->
        <div id="experience_info" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Experience Information</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-scroll">
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title">Experience Information <a href="javascript:void(0);" class="delete-icon"><i class="fa fa-trash-o"></i></a></h3>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <input type="text" class="form-control floating" value="Digital Devlopment Inc">
                              
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <input type="text" class="form-control floating" value="United States">
                             
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <input type="text" class="form-control floating" value="Web Developer">
                              
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <div class="cal-icon">
                          <datepicker v-model="startdate3"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                      </div>
                             
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <div class="cal-icon">
                          <datepicker v-model="enddate3"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                     </div>
                         
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title">Experience Information <a href="javascript:void(0);" class="delete-icon"><i class="fa fa-trash-o"></i></a></h3>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <input type="text" class="form-control floating" value="Digital Devlopment Inc">
                              
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <input type="text" class="form-control floating" value="United States">
                              
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <input type="text" class="form-control floating" value="Web Developer">
                              
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <div class="cal-icon">
                          <datepicker v-model="startdate4"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                      </div>
                            
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-focus">
                              <div class="cal-icon">
                          <datepicker v-model="enddate4"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                     </div>
                           
                            </div>
                          </div>
                        </div>
                        <div class="add-more">
                          <a href="javascript:void(0);"><i class="fa fa-plus-circle"></i> Add More</a>
                        </div>
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
        <!-- /Experience Modal -->
</template>
<script>
  import Vue from 'vue';
  import { ref } from 'vue';
  import { useToast } from "vue-toastification";
  import useSearchComp from "../../../composables/useSearchComp";
  import useComp from '../../../composables/useComp';

  import axios from 'axios';

  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  const currentDate2 = ref(new Date())
  const currentDate3 = ref(new Date())
  const currentDate4 = ref(new Date())
  const currentDate5 = ref(new Date())
  const currentDate6 = ref(new Date())
  const currentDate7 = ref(new Date())
  const currentDate8 = ref(new Date())
  const currentDate9 = ref(new Date())

  export default {
    props: ['user'],
    setup(){
                  const toast = useToast();
                  const { userSearch: search } = useSearchComp();
                  const { config } = useComp(); 
                  return { search, toast, config }
          },
    data() {
    return {
      // gender: ["Male", "Female", "Others"],
      // gender: [{id: "male", text: "Male"}, {id: "female", text: "Female"}],
      gender: this.config.gender.genders,
      country: this.config.country.countries,
      department: ["Select Department", "Web Development", "IT Management", "Marketing"],
      designation: ["Select Designation", "Web Designer", "Web Developer", "Android Developer"],
      reports: ["-", "Wilmer Deluna", "Lesley Grauer", "Jeffery Lalor"],
      relationshipStatus: ["-", "Single", "Married"],
      startdate: currentDate,
      enddate: currentDate1,
      startdate1: currentDate2,
      enddate1: currentDate3,
      startdate2: currentDate4,
      enddate2: currentDate5,
      startdate3: currentDate6,
      enddate3: currentDate7,
      startdate4: currentDate8,
      enddate4: currentDate9,

      isLoading: false,


    }
    },
    components: {
   
    },
    methods: {
      async editProfile() {

          // console.log('We are here'); return;
          let data = {
            "id": this.user._id,
            "firstName": this.user.firstName,
            "lastName": this.user.lastName,
            "gender": this.user.gender,
            "address": this.user.address,
            "city": this.user.country,
            "state": this.user.state,
            "country": this.user.country,
            "zip": this.user.zip,
            "phone": this.user.phone,
          }
          // const update = await this.search.update(data);


          this.isLoading = true;

          try {
          await axios.patch(`users/update`, data)
              .then(({data}) => {
                  console.log(data);
                  this.isLoading = false;
                  // return data;
                  console.log(data);
                });
              }
              catch (error) {
                console.log(error);
                this.isLoading = false;
              }


  
          // Toast
          this.toast.success("Updated Successfully!");
  
          // Reset Search to Trigger Re-Render
          // this.search.setSearch();
  
          document.getElementsByClassName("close")[0].click();// Close Modal;
  
        },

    },
    mounted() {
    },
  }
</script>