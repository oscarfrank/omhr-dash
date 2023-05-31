import { defineStore } from "pinia";
import axios from 'axios';
import values from '../../values/config';

export const useClientSearch = defineStore('clientSearch', {

    // States
    state: () => ({
        popUpStyle: "new",
        itemData: {
          "id": "",
          "number": "",
          "shortName": "",
          "companyName": "",
          "email": "",
          "phone": "",
          "address": "",
          "website": "",
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
          await axios.get(`clients/list?page=${this.page}&limit=${this.limit}&search=${this.searchTerm}&filter=${this.filter}&sort=${this.sort}&order=${this.order}`)
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
          "number": data.number,
          "shortName": data.shortName,
          "companyName": data.companyName,
          "email": data.email,
          "phone": data.phone,
          "address": data.address,
          "website": data.website,
        }

        this.isLoading = true;
        try {
          await axios.patch(`clients/update`, dataObject)
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
          await axios.delete(`clients/delete`, { data: { id: this.deleteId } } )
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
          "number": "",
          "shortName": "",
          "companyName": "",
          "email": "",
          "phone": "",
          "address": "",
          "website": ""
        }

      },

      editModal(data){
        this.itemData =  {
          "id": data._id,
          "number": data.number,
          "shortName": data.shortName,
          "companyName": data.companyName,
          "email": data.email,
          "phone": data.phone,
          "address": data.address,
          "website": data.website,
        }

      },


      // Let's Set from Saved Table Settings


    },
  })