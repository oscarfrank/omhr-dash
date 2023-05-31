import { defineStore } from "pinia";
import axios from 'axios';
import values from '../../values/config';

export const useAssetSearch = defineStore('assetSearch', {

    // States
    state: () => ({
        popUpStyle: "new",
        itemData: {
          "id": "",
          "name": "",
          "assetId": "",
          "assetUser": "",
          "manufacturer": "",
          "model": "",
          "assetType": "",
          "serialNum": "",
          "purchasedFrom": "",
          "condition": "",
          "purchaseDate": "",
          "warranty": "",
          "possessedBy": "",
          "amountUSD": "",
          "amount": "",
          "description": "",
          "doc": "",
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
          await axios.get(`assets/list?page=${this.page}&limit=${this.limit}&search=${this.searchTerm}&filter=${this.filter}&sort=${this.sort}&order=${this.order}`)
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
          "name": data.name,
          "assetId": data.assetId,
          "assetUser": data.assetUser,
          "manufacturer": data.manufacturer,
          "model": data.model,
          "assetType": data.assetType,
          "serialNum": data.serialNum,
          "purchasedFrom": data.purchasedFrom,
          "condition": data.condition,
          "purchaseDate": data.purchaseDate,
          "warranty": data.warranty,
          "possessedBy": data.possessedBy,
          "amountUSD": data.amountUSD,
          "amount": data.amount,
          "description": data.description,
          "doc": data.doc,
          "status": data.status,
        }

        this.isLoading = true;
        try {
          await axios.patch(`assets/update`, dataObject)
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
          await axios.delete(`assets/delete`, { data: { id: this.deleteId } } )
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
          "name": "",
          "assetId": "",
          "assetUser": "",
          "manufacturer": "",
          "model": "",
          "assetType": "",
          "serialNum": "",
          "purchasedFrom": "",
          "condition": "",
          "purchaseDate": "",
          "warranty": "",
          "possessedBy": "",
          "amountUSD": "",
          "amount": "",
          "description": "",
          "doc": "",
          "status": "",

        }

      },

      editModal(data){
        this.itemData =  {
          "id": data._id,
          "name": data.name,
          "assetId": data.assetId,
          "assetUser": data.assetUser,
          "manufacturer": data.manufacturer,
          "model": data.model,
          "assetType": data.assetType,
          "serialNum": data.serialNum,
          "purchasedFrom": data.purchasedFrom,
          "condition": data.condition,
          "purchaseDate": data.purchaseDate,
          "warranty": data.warranty,
          "possessedBy": data.possessedBy,
          "amountUSD": data.amountUSD,
          "amount": data.amount,
          "description": data.description,
          "doc": data.doc,
          "status": data.status,
        }

      },


      // Let's Set from Saved Table Settings


    },
  })