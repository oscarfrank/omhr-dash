<template>
  <table class="table table-striped custom-table datatable" id="termination">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Terminated Employee </th>
                      <th>Department </th>
                      <th>Termination Type </th>
                      <th>Termination Date </th>
                      <th>Reason </th>
                      <th>Notice Date </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                    <tbody>
                      <!-- Loading Animation -->
                      <tr v-if="search.isLoading">
                        <loading-animation />
                      </tr>
  
                      <!-- Loaded Data -->
                      <tr v-else v-for="item in search.data" :key="item.title">
  
  
                        <td>{{item.title}}</td>
                        <td>{{item.terminationType}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.target}}</td>
                        <td>
                          {{item.start}}
                        </td>
                        <td>{{item.end}}</td>
                        <td>{{item.description}}</td>
                        <td>
                          <div class="dropdown action-label">
                            <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fa fa-dot-circle-o text-success"></i> {{item.status}}
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                            </div>
                          </div>
                        </td>
                        <td><p class="mb-1">{{item.progress}}</p><div class="progress" style="height:5px"><div class="progress-bar bg-primary progress-sm" style="width: 73%;height:10px;"></div></div></td>
                        
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#add_termination" @click="editPop(item)"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_termination" @click="deletePop(item._id)"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
                  
            const { terminateSearch: search } = useSearchComp();
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