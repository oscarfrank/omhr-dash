import { defineStore } from "pinia";

export const useOfficials = defineStore('officials', {

    // States
    state: () => ({
         
        ceo: 'Oscarmini',
        coo: 'Victor Mbukpa',
        manager: 'Larry Frank',
        secretary: 'Lilly Sign',
        cfo: 'Kelvin Ufere'

    }),


    // Getters
    getters: {

      finishedTodos(state) {
        // autocompletion! ✨
        return state.todos.filter((todo) => todo.isFinished)
      }
      
    },

    // Actions
    actions: {
      // any amount of arguments, return a promise or not
      addTodo(text) {
        // you can directly mutate the state
        this.todos.push({ text, id: this.nextId++, isFinished: false })
      },
    },
  })