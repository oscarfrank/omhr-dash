import { defineStore } from "pinia";
import axios from 'axios';
import values from '../../values/config';

export const useGoalSearch = defineStore('goalSearch', {

    // States
    state: () => ({
        popUpStyle: "new",
        itemData: {
          "id": "",
          "title": "",
          "target": "",
          "description": "",
          "goalType": "",
          "start": "",
          "end": "",
          "status": "",
          "progress": "",
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
          await axios.get(`goals/list?page=${this.page}&limit=${this.limit}&search=${this.searchTerm}&filter=${this.filter}&sort=${this.sort}&order=${this.order}`)
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
          "title": data.title,
          "target": data.target,
          "description": data.description,
          "goalType": data.goalType,
          "start": data.start,
          "end": data.end,
          "status": data.status,
          "progress": data.progress,
        }

        this.isLoading = true;
        try {
          await axios.patch(`goals/update`, dataObject)
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

      // The Delete Logic
      async delete() {
        this.isLoading = true;
        try {
          await axios.delete(`goals/delete`, { data: { id: this.deleteId } } )
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
          "title": "",
          "target": "",
          "description": "",
          "goalType": "",
          "start": "",
          "end": "",
          "status": "",
          "progress": "",
        }

      },

      editModal(data){
        this.itemData =  {
          "id": data._id,
          "title": data.title,
          "target": data.target,
          "description": data.description,
          "goalType": data.goalType,
          "start": data.start,
          "end": data.end,
          "status": data.status,
          "progress": data.progress,
        }

      },


      // Let's Set from Saved Table Settings


    },
  })