<template>
    <!-- Page Header -->
             <div class="page-header">
               <div class="row align-items-center">
                 <div class="col">
                   <h3 class="page-title">Terminations</h3>
                   <ul class="breadcrumb">
                     <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                     <li class="breadcrumb-item active">Terminations</li>
                   </ul>
                 </div>
                 <div class="col-auto float-end ms-auto">
                   <a href="#" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_termination" @click="add"><i class="fa fa-plus"></i> Add {{ tablePlaceHolder }}</a>
                   <div class="view-icons">
                     <span class="label label-success" style="margin-right: 20px; color: #FF0000"><em>{{ pageFilter }}</em></span>
                     <a href="#" v-for="item in searchFilterArray"  @click.prevent="filterType(item)" :key="item.name" :class="{ 'active me-2': search.filter == item.filter }" class="grid-view btn btn-link" :title="item.name"><i :class="item.icon"></i></a>
                   </div>
                 </div>
               </div>
             </div>
             <!-- /Page Header -->
   </template>
   
   <script>
   import useSearchComp from '../../../composables/useSearchComp';
   
   export default {
     data(){
       return {
         tablePlaceHolder: "Termination",
   
         searchFilterArray: [
           {"name": "All Users", "filter": "user", "icon": "fa fa-users"},
           {"name": "All Employed Users", "filter": "employed", "icon": "fa fa-check-circle"},
           {"name": "All Fired Employees", "filter": "fired", "icon": "fa fa-ban"},
           {"name": "All Resignated Users", "filter": "resigned", "icon": "fa fa-stop"},
         ],
   
         pageFilter: ""
       }
   
     },
     setup() {
             const { terminateSearch: search } = useSearchComp();
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
     name: "terminationHeader"
   }
   </script>
   