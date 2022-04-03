import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => {
        /*
        * In here is where we define the variables to be used
        * within this store.
        */
        return { count: 0, counters: [1, 2, 3, 4] };
    },
    /*
     * The actions mutate the store variables in some way.
     */
    actions: {
        increment(val: number = 1): void {
            this.count += val;
        }
        /* Async action example
        async waitThenAdd(val: number = 1): void {
            setTimeout(() => {
                this.count += val;
            }, 1000);
        }
         */
    },
    /*
     * Finally we have our getters.
     * These are computed properties. Hence this means,
     * it will compute a value from the available varibles
     * in the store.
     */
    getters: {
        doubleCount: (state) => state.count * 2,
    },
})
