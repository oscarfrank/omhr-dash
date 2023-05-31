<template>
 <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Leaves</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Leave</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a href="#" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_user" @click="add"><i class="fa fa-plus"></i> Add {{ tablePlaceHolder }}</a>
                <div class="view-icons">
                  <span class="label label-success" style="margin-right: 20px; color: #FF0000"><em>{{ pageFilter }}</em></span>
                  <a href="#" v-for="item in searchFilterArray"  @click.prevent="filterType(item)" :key="item.name" :class="{ 'active me-2': search.filter == item.filter }" class="grid-view btn btn-link" :title="item.name"><i :class="item.icon"></i></a>
                </div>
              </div>
            </div>
          </div>
          <!-- /Page Header -->



          <!-- Leave Statistics -->
          <div class="row">
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Annual Leave</h6>
                <h4>12</h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Medical Leave</h6>
                <h4>3</h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Other Leave</h6>
                <h4>4</h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Remaining Leave</h6>
                <h4>5</h4>
              </div>
            </div>
          </div>
          <!-- /Leave Statistics -->
</template>

<script>
import useSearchComp from '../../../../composables/useSearchComp';

export default {
  data(){
    return {
      tablePlaceHolder: "User",

      searchFilterArray: [
        {"name": "All Leaves", "filter": "user", "icon": "fa fa-users"},
        {"name": "All Employed Leaves", "filter": "employed", "icon": "fa fa-check-circle"},
        {"name": "All Fired Employees", "filter": "fired", "icon": "fa fa-ban"},
        {"name": "All Resignated Leaves", "filter": "resigned", "icon": "fa fa-stop"},
      ],

      pageFilter: ""
    }

  },
  setup() {
          const { userSearch: search } = useSearchComp();
          return { search }
  },
  methods: {
    add(){
      this.search.clearModal();
      this.search.popUpStyle = "new";
    },

    filterType(x){
      this.search.setFilterType(x.filter);
      this.pageFilter = x.name;
    },

  },
  name: "leaveHeader"
}
</script>
