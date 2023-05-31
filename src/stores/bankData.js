import { defineStore } from "pinia";
import axios from "axios";

export const useBankData = defineStore('bankData', {

    // States
    state: () => ({ 

          banks: [],
      
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
      async fetchBanks() {

        try {
          await axios.get('banks/all')
              .then(({data}) => {
                  this.banks = data; // Set Bank List
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