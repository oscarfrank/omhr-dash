<template>
  <table class="table table-striped custom-table datatable" id="resignation">
                  <thead>
                    <tr>
                      <th>Resigning Employee </th>
                      <th>Department </th>
                      <th>Reason </th>
                      <th>Notice Date </th>
                      <th>Resignation Date </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                    <tbody>
                      <!-- Loading Animation -->
                      <tr v-if="search.isLoading">
                        <loading-animation />
                      </tr>
  
                      <!-- Loaded Data -->
                      <tr v-else v-for="item in search.data" :key="item.id">
  
  
                        <td>{{item.employeeFullName}}</td>
                        <td>{{item.department}}</td>
                        <td>{{item.reason}}</td>
                        <td>{{item.noticeDate}}</td>
                        <td>
                          {{item.resignationDate}}
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#add_resignation" @click="editPop(item)"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_resignation" @click="deletePop(item._id)"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
                  
            const { resignSearch: search } = useSearchComp();
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