<template>
<table class="table table-striped custom-table datatable" id="employeelistcontent">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>EID</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th class="text-nowrap">Join Date</th>
                      <th>Role ()</th>
                      <th class="text-end no-sort">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Loading Animation -->
                    <tr v-if="search.isLoading">
                      <loading-animation />
                    </tr>

                    <!-- Loaded Data -->
                    <tr v-else v-for="item in search.data" :key="item.id">
                      <td>
                        <h2 class="table-avatar">
                          <!-- <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link> -->
                          <router-link to="/profile">{{item.firstName}} {{item.middleName}} {{item.lastName}} <span>{{ item.username }}</span></router-link>
                        </h2>
                      </td>
                      <td>{{item.employeeNum}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.mobile}}</td>
                      <td>{{item.joindate}}</td> 
                      <td>{{ item.position }}</td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
import useSearchComp from '../../../../composables/useSearchComp';

  export default {
setup(){
                
          const { userSearch: search } = useSearchComp();
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
      // Set for only Employed
      this.search.filter = "employed";
      
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
          }
    },

  }
</script>