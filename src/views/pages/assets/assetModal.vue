
<template>
  <!-- Add/Edit Modal -->

<div id="add_asset" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-md" role="document">
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Asset Name</label>
                        <input class="form-control" type="text" v-model="search.itemData.name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Asset ID.</label>
                        <input class="form-control" placeholder="OM-ASID-0001" type="text" v-model="search.itemData.assetId">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        
                        <div class="cal-icon">
                          <label>Purchase Date</label>
                          <datepicker v-model="purchaseDate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchase From</label>
                        <input class="form-control" type="text" v-model="search.itemData.purchasedFrom">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Manufacturer</label>
                        <input class="form-control" type="text" v-model="search.itemData.manufacturer">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Model</label>
                        <input class="form-control" type="text" v-model="search.itemData.model">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Serial Number</label>
                        <input class="form-control" type="text" v-model="search.itemData.serialNum">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Asset Type</label>
                        <input class="form-control" type="text" v-model="search.itemData.assetType">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Condition</label>
                        <input class="form-control" type="text" v-model="search.itemData.condition">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Warranty</label>
                        <input class="form-control" type="text" placeholder="In Months" v-model="search.itemData.warranty">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Value USD</label>
                        <input placeholder="$1800" class="form-control" type="text" v-model="search.itemData.amountUSD">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Asset User</label>
                        <input placeholder="" class="form-control" type="text" v-model="search.itemData.possessedBy">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" v-model="search.itemData.description"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Status</label>
                        <input class="form-control" v-model="search.itemData.status">
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
          <div class="modal custom-modal fade" id="delete_asset" role="dialog">
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
                  const { assetSearch: search } = useSearchComp();
                  return { search, toast }
          },
      components: {
      },
      data() {
      return {
  
        addassettype: ['general', 'abnormal'],
        editassetstatus: ['active', 'ended'],
        
  
        tablePlaceHolder: "Asset",
        isLoading: false,
      }
      },
      mounted() {
      },
      name: 'assetModal',
      methods: {
        async addNew() {
          let data = {}
          this.isLoading = true;
          data = {
            "name": this.search.itemData.name,
            "assetId": this.search.itemData.assetId,
            "manufacturer": this.search.itemData.manufacturer,
            "model": this.search.itemData.model,
            "assetType": this.search.itemData.assetType,
            "serialNum": this.search.itemData.serialNum,
            "purchasedFrom": this.search.itemData.purchasedFrom,
            "condition": this.search.itemData.condition,
            "purchaseDate": this.search.itemData.purchaseDate,
            "warranty": this.search.itemData.warranty,
            "possessedBy": this.search.itemData.possessedBy,
            "amountUSD": this.search.itemData.amountUSD,
            "amount": this.search.itemData.amount,
            "description": this.search.itemData.description,
            "doc": this.search.itemData.doc,
            "status": this.search.itemData.status,
          }
  
          // console.log(data); return;
                        try {
                          await axios.post('assets/add', data)
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
            "name": this.search.itemData.name,
            "assetId": this.search.itemData.assetId,
            "manufacturer": this.search.itemData.manufacturer,
            "model": this.search.itemData.model,
            "assetType": this.search.itemData.assetType,
            "serialNum": this.search.itemData.serialNum,
            "purchasedFrom": this.search.itemData.purchasedFrom,
            "condition": this.search.itemData.condition,
            "purchaseDate": this.search.itemData.purchaseDate,
            "warranty": this.search.itemData.warranty,
            "possessedBy": this.search.itemData.possessedBy,
            "amountUSD": this.search.itemData.amountUSD,
            "amount": this.search.itemData.amount,
            "description": this.search.itemData.description,
            "doc": this.search.itemData.doc,
            "status": this.search.itemData.status,
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