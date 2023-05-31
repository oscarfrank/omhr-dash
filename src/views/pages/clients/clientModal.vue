
<template>

<!-- Add/Edit Modal -->
<div id="add_client" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" v-if="search.popUpStyle == 'new'">Add {{ tablePlaceHolder }}</h5>
                <h5 class="modal-title" v-else >Edit {{ tablePlaceHolder }}</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>Company Name <span class="text-danger">*</span></label>
                        <input class="form-control" type="text" v-model="search.itemData.companyName" >
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Alias Name <span class="text-danger">*</span></label>
                        <input class="form-control" type="text" v-model="search.itemData.shortName" >
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Client ID. <span class="text-danger">*</span></label>
                        <input class="form-control" type="text" v-model="search.itemData.number">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Phone <span class="text-danger">*</span></label>
                        <input class="form-control" type="text" v-model="search.itemData.phone">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Address <span class="text-danger">*</span></label>
                        <input class="form-control" type="text" v-model="search.itemData.address">
                      </div>
                    </div>


                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Email <span class="text-danger">*</span></label>
                        <input class="form-control" type="email" v-model="search.itemData.email">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Website <span class="text-danger">*</span></label>
                        <input class="form-control" type="text" v-model="search.itemData.website">
                      </div>
                    </div>
                  </div>

                  
                  <div class="submit-section">
                    <loading-button v-if="search.popUpStyle == 'new'" color="btn btn-primary submit-btn" :isLoading="isLoading" @click="addNew">Submit</loading-button>
                    <loading-button v-else color="btn btn-primary submit-btn" :isLoading="isLoading" @click.prevent="editSave">Save</loading-button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add/Edit Modal -->

          
          <!-- Delete Modal -->
          <div class="modal custom-modal fade" id="delete_client" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="form-header">
                    <h3>Delete {{ tablePlaceHolder }}</h3>
                    <p>Are you sure want to delete?</p>
                  </div>
                  <div class="modal-btn delete-action">
                    <div class="row">
                      <div class="col-6">
                        <loading-button color="btn btn-primary continue-btn" :disabled="isLoading" @click="deleteEntry">Delete</loading-button>
                      </div>
                      <div class="col-6">
                        <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn closeDelete">Cancel</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Delete Modal -->
  </template>
  <script>
  import useSearchComp from "../../../composables/useSearchComp";
  import { useToast } from "vue-toastification";
  import axios from 'axios';
    export default {
      setup(){
                  const toast = useToast();
                  const { clientSearch: search } = useSearchComp();
                  return { search, toast }
          },
      components: {
      },
      data() {
      return {
  
        addclienttype: ['general', 'abnormal'],
        editclientstatus: ['active', 'ended'],
        
  
        tablePlaceHolder: "Client",
        isLoading: false,
      }
      },
      mounted() {
      },
      name: 'clientModal',
      methods: {
        async addNew() {
          let data = {}
          this.isLoading = true;
          data = {
            "number": this.search.itemData.number,
            "companyName": this.search.itemData.companyName,
            "shortName": this.search.itemData.shortName,
            "email": this.search.itemData.email,
            "phone": this.search.itemData.phone,
            "address": this.search.itemData.address,
            "website": this.search.itemData.website,
          }
  
          // console.log(data); return;
                        try {
                          await axios.post('clients/add', data)
                              .then((result) => {
                                  
                                  console.log(result);
                                  this.isLoading = false;
  
                                  // Toast Notification
                                  this.toast.success("Added Successfully!");
  
                                  // Reset Search to Trigger Re-Render
                                  this.search.setSearch();
  
                                  document.getElementsByClassName("close")[0].click();// Close Modal;
  
  
                                  return result;
                          });
                          }
                          catch (error) {
                              console.log(error)
                          }
  
        },
        async editSave() {
          let data = {
            "id": this.search.itemData.id,
            "number": this.search.itemData.number,
            "companyName": this.search.itemData.companyName,
            "shortName": this.search.itemData.shortName,
            "email": this.search.itemData.email,
            "phone": this.search.itemData.phone,
            "address": this.search.itemData.address,
            "website": this.search.itemData.website,
          }
          const update = await this.search.update(data);
  
          // Toast
          this.toast.success("Updated Successfully!");
  
          // Reset Search to Trigger Re-Render
          this.search.setSearch();
  
          document.getElementsByClassName("close")[0].click();// Close Modal;
  
        },
        async deleteEntry(id) {
          const update = await this.search.delete(id);
  
          // Toast
          this.toast.success("Deleted Successfully!");
  
          // Reset Search to Trigger Re-Render
          this.search.setSearch();
  
          document.getElementsByClassName("closeDelete")[0].click(); // Close Modal;
  
        }
      }
    }
  </script>