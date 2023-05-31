import { defineStore } from "pinia";
import axios from "axios";

export const useAssetData = defineStore('assetData', {

    // States
    state: () => ({ 

          assets: [],
      
          // {
          //     beneficiary: 'Oscarmini Company',
          //     number: '4864148028',
          //     swift: '00000',
          //     type: 'Current',
          //     name: 'FCMB',
          //     default: true

          // },

          // {
          //   beneficiary: 'Oscar Steve Frank',
          //   number: '0116608722',
          //   swift: '00000',
          //   type: 'Savings',
          //   name: 'GTB',
          //   default: false
          // }
  
        }),


    

    // Actions
    actions: {
      async fetchAssets() {

        try {
          await axios.get('assets/all')
              .then(({data}) => {
                  this.assets = data; // Set Asset List
                  return data;
          });
          }
          catch (error) {
              // alert(error)
              console.log(error);
          }
      
      },

    },
  })