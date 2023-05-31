import { defineStore } from "pinia";
import axios from 'axios';

export const useConfigSettings = defineStore('configSettings', {

    // States
    state: () => ({
        
        siteSettings: [],
        gender: [],
        country: []

    }),


    // Getters
    getters: {
      getSettings(state){
          return state.siteSettings;
        }
    },

    // Actions
    actions: {
       async fetchSettings() {

        try {
          await axios.get('settings/all')
            .then((result) => {
                // console.log(result.data[0]);
                this.siteSettings = result.data[0];
                this.gender = result.data[1];
                this.country = result.data[2];
          });
          }
          catch (error) {
              alert(error)
              console.log(error)
          }
      
      },

      async saveSettings(data) {

        try {
          await axios.patch('settings/update', data)
            .then((result) => {
                // console.log(result);
                this.siteSettings = data;
                return result;
          });
          }
          catch (error) {
              // alert(error)
              console.log(error)
          }
      
      },

      updateCountry(data) {
        this.siteSettings.country = data;
        console.log(data);
        return data;
      }


    },
  })