<template>
  <v-container>
    <v-row class="text-center">
      <v-col
          class="mb-5"
          cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Store and State Test
        </h2>

        <div class="flex-row">
          <span>Count (component): </span><span>{{ count }}</span>
        </div>
        <div class="flex-row">
          <span>Count (store): </span><span>{{ store.count }}</span>
        </div>
        <div class="flex-row">
          <span>Double Count (store): </span><span>{{ store.doubleCount }}</span>
        </div>
        <br/>
        <v-btn @click="incrementCount">
          Increment
        </v-btn>
        <v-btn @click="store.increment(1)">
          Increment Store
        </v-btn>
        <v-btn @click="incrementWithAmount(4)">
          Plus 4
        </v-btn>
        <br/>
        <br/>
        <v-btn @click="resetStore()">
          Reset Store
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<style src="./state-demo-component.scss"></style>

<script setup lang="ts">
// Imports
import { ref } from 'vue';
import logo from '../../assets/logo.svg';

import {useCounterStore} from "../../stores/counterStore";
import {storeToRefs} from "pinia";

// Variables
const props = defineProps<{ msg: string }>()
const store = useCounterStore();
const count = ref(0); // Normal component state via ref.

/* The following is how we can decouple the store variable while keeping it reactive.
 * const { count } = storeToRefs(store);
 */

// Functions
const incrementCount = (): void => {
  count.value++;
  store.count++;
}

const incrementWithAmount = (val: number): void => {
  count.value += val;
  store.count += val;
}

const resetStore = (): void => {
  store.$reset();
}
</script>
