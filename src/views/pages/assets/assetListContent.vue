<template>
  <table class="table table-striped custom-table datatable" id="asset">
                    <thead>
                    <tr>
                      <th>Asset Name</th>
                      <th>Asset Id</th>
                      <th>Asset User</th>
                      <th>Purchase Date</th>
                      <th>Warranty</th>
                      <th>Amt.($)</th>
                      <th class="text-center">Status</th>
                      <th class="text-end"></th>
                    </tr>
                    </thead>
                    <tbody>
                      <!-- Loading Animation -->
                      <tr v-if="search.isLoading">
                        <loading-animation />
                      </tr>
  
                      <!-- Loaded Data -->
                      <tr v-for="item in search.data" :key="item.id">
                        <td><strong>{{item.name}}</strong></td>
                        <td>{{item.assetId}}</td>
                        <td>{{item.possessedBy}}</td>
                      <td>{{item.purchasedDate}}</td>
                      <td>{{item.warranty}}</td>
                      <td>${{item.amountUSD}}</td>
                      <td class="text-center">  
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.status}}
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Pending</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Approved</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Returned</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#add_asset" @click="editPop(item)"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_asset" @click="deletePop(item._id)"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                            </div>
                          </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
  
                  <!-- Empty Table Row -->
                  <no-table-data  v-if="search.data.length==0" />
                  <!-- Pagination -->
                  <pagination :data="search.paginationData" @pagechanged="onPageChange" />
  
                  
  </template>
  <script>
  const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/);
  import useSearchComp from '../../../composables/useSearchComp';
  
    export default {
  setup(){
                  
            const { assetSearch: search } = useSearchComp();
            return { search }
    },
  data() {
      return {
  
        isLoading: false,
      }
    },
  components: {
      },
  mounted() {
        // Set for all
        this.search.filter = "user";
        
        // Load Fetch Content from DB/Store
        this.search.setSearch();
      },
  methods: {
          loadImg(imgPath) {
              return images('./' + imgPath).default
          },
  
          onPageChange(page) {
              this.search.page = page;
              this.search.setSearch();
            },
          editPop(data){
              this.search.popUpStyle = "edit";
              this.search.editModal(data);
          },
          deletePop(data){
              this.search.setDeleteId(data);
          }
      },
  
    }
  </script>