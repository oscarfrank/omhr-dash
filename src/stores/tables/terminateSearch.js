import { defineStore } from "pinia";
import axios from 'axios';
import values from '../../values/config';

export const useTerminateSearch = defineStore('terminateSearch', {

    // States
    state: () => ({
        popUpStyle: "new",
        itemData: {
          "id": "",
          "employeeFullName": "",
          "employeeUsername": "",
          "department": "",
          "reason": "",
          "noticeDate": "",
          "terminationDate": "",
          "moderator": "",
          "status": "",
        },
        deleteId: "",
        isLoading: false,
        searchTerm: "",
        filter: "user",
        sort: "createdAt",
        order: "asc",
        limit: values.PAGE_SIZE,
        page: 1,
        data: {},
        paginationData: {},

    }),

    // Getters
    getters: {
      // getSettings(state){
      //     return state.siteSettings;
      //   }
    },

    // Actions
    actions: {

      // Set Delete ID
      setDeleteId(id){
        this.deleteId = id;

      },

      // Set Filter Type
      setFilterType(filter){
        this.filter = filter;
        this.page = 1;
        this.setSearch();
      },

      // The Search Logic
      async setSearch() {
        this.isLoading = true;
        try {
          await axios.get(`terminations/list?page=${this.page}&limit=${this.limit}&search=${this.searchTerm}&filter=${this.filter}&sort=${this.sort}&order=${this.order}`)
              .then(({data}) => {
                  this.data = data.data; // Set List
                  this.paginationData = data.pagination; // Set Pagination Data
                  this.isLoading = false;
                  return data;
                });
              }
              catch (error) {
                console.log(error);
                this.isLoading = false;
              }
      },

      // The Update Logic
      async update(data) {
        let dataObject = {
          "id": data.id,
          "employeeFullName": data.termination,
          "employeeUsername": data.employeeUsername,
          "department": data.department,
          "reason": data.reason,
          "noticeDate": data.noticeDate,
          "terminationDate": data.terminationDate,
          "moderator": data.moderator,
          "status": data.status,
        }

        this.isLoading = true;
        try {
          await axios.patch(`terminations/update`, dataObject)
              .then(({data}) => {
                  // console.log(data);
                  this.isLoading = false;
                  return data;
                });
              }
              catch (error) {
                console.log(error);
                this.isLoading = false;
              }

      },

      // The Delete Logic
      async delete() {
        this.isLoading = true;
        try {
          await axios.delete(`terminations/delete`, { data: { id: this.deleteId } } )
              .then(({data}) => {
                  console.log(data);
                  this.isLoading = false;
                  return data;
                });
              }
              catch (error) {
                console.log(error);
                this.isLoading = false;
              }
      },

      clearModal(){
        this.itemData =  {
          "id": "",
          "employeeFullName": "",
          "employeeUsername": "",
          "department": "",
          "reason": "",
          "noticeDate": "",
          "terminationDate": "",
          "moderator": "",
          "status": "",
        }

      },

      editModal(data){
        this.itemData =  {
          "id": data._id,
          "employeeFullName": data.employeeFullName,
          "employeeUsername": data.employeeUsername,
          "department": data.department,
          "reason": data.reason,
          "noticeDate": data.noticeDate,
          "terminationDate": data.terminationDate,
          "moderator": data.moderator,
          "status": data.status,
        }

      },


      // Let's Set from Saved Table Settings


    },
  })