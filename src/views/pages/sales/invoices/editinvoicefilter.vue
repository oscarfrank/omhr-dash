<template>
<div class="row">
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Client <span class="text-danger">*</span></label>
                      <vue-select :options="editinvoiceclient" />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Project <span class="text-danger">*</span></label>
                      <vue-select :options="editinvoiceproject" />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Email</label>
                      <input class="form-control" type="email" value="barrycuda@example.com">
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Tax</label>
                      <vue-select :options="editinvoicetax" />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Client Address</label>
                      <textarea class="form-control" rows="3">5754 Airport Rd, Coosada, AL, 36020</textarea>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <div class="form-group">
                      <label>Billing Address</label>
                      <textarea class="form-control" rows="3">5754 Airport Rd, Coosada, AL, 36020</textarea>
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
      editinvoiceclient: ["Please Select", "Barry Cuda", "Tressa Wexler"],
      editinvoiceproject: ["Select Project", "Office Management", "Project Management"],
      editinvoicetax: ["Select Tax", "VAT", "GST", "No Tax"],
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