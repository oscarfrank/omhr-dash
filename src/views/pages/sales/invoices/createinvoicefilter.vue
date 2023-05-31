<template>
<div class="row">
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Client <span class="text-danger">*</span></label>
                      <vue-select :options="createinvoiceclient" />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Project <span class="text-danger">*</span></label>
                      <vue-select :options="createinvoiceproject" />
                    </div>
                  </div>
                  
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Email</label>
                      <input class="form-control" type="email">
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Tax</label>
                      <vue-select :options="createinvoicetax" />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Client Address</label>
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Billing Address</label>
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Invoice date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Due Date <span class="text-danger">*</span></label>
                      <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                    </div>
                  </div>
                </div>
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
    data() {
    return {
      createinvoiceclient: ["Please Select", "Barry Cuda", "Tressa Wexler"],
      createinvoiceproject: ["Select Project", "Office Management", "Project Management"],
      createinvoicetax: ["Select Tax", "VAT", "GST", "No Tax"],
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</script>
