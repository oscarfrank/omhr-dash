import { defineStore } from "pinia";
import axios from 'axios';

export const useUser = defineStore('user', {

    // States
    state: () => ({
        
        user: {},
        bank: {"mmm": 999},
        isLoggedIn: false,
        name: "freeman",

    }),


    // Getters
    getters: {
      getUser(state){
          return state.user;
        },
      getBank(state){
          return state.bank;
        },
    },

    // Actions
    actions: {

       async fetchUser() {

        try {
          await axios.get('users/me')
            .then((result) => {
                // console.log(result.data);
                if(result.data == undefined){
                  this.isLoggedIn = false;
                }else{
                  this.user = result.data;
                  this.isLoggedIn = true;
                }
          });
          }
          catch (error) {
              // alert(error)
              // console.log(error);
              console.log('Unauthorized Token...');
              this.isLoggedIn = false;
          }
      
      },

      async fetchBank() {

        try {
          await axios.get('user-banks/all')
            .then((result) => {
                return result;
          });
          }
          catch (error) {
              // alert(error)
              console.log(error);
          }
      
      },


      setUser(data){
        // console.log(data);
        // this.user = {"name": "the man"}
        this.user = data;
      },
      setUserBank(data){
        this.bank = data;
      },

      setLogout() {
        this.isLoggedIn = false;
      }


    },

    
  })