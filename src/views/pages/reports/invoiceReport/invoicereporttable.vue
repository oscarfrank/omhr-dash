w<template>
  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" 
id="invoicereporttable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Invoice Number</th>
                      <th>Client</th>
                      <th>Created Date</th>
                      <th>Due Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in invoicereport" :key="item.id">
                      <td>{{item.no}}</td>
                      <td><router-link to="/invoice-view">{{item.invoiceno}}</router-link></td>
                      <td>{{item.client}}</td>
                      <td>{{item.createddate}}</td>
                      <td>{{item.duedate}}</td>
                      <td>{{item.amount}}</td>
                      <td><span class="badge bg-inverse-success">{{item.status}}</span></td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <router-link class="dropdown-item" to="/edit-invoice"><i class="fa fa-pencil m-r-5"></i> Edit</router-link>
                            <router-link class="dropdown-item" to="/invoice-view"><i class="fa fa-eye m-r-5"></i> View</router-link>
                            <a class="dropdown-item" href="#"><i class="fa fa-file-pdf-o m-r-5"></i> Download</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import invoicereport from '../../../../assets/json/invoiceReport.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      invoicereport: invoicereport
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#invoicereporttable')
    },
  }
</script>