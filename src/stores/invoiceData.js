import { defineStore } from "pinia";

export const useInvoiceData = defineStore('invoiceData', {

    // States
    state: () => ({
         
        data: []
        
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