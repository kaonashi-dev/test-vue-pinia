import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {

   state: () => ({
      counter: 0,
      changes: 0
   }),

   actions: {
      increment(value: number) {
         this.counter += value;
         this.changes += 1;
      }
   }

});