<template src="./home-component.html"></template>
<style src="./home-component.scss"></style>

<script setup lang="ts">
// Imports
import { ref } from 'vue';
import logo from '../../assets/logo.svg';

import { userTestStore } from "../../stores/test";
import {storeToRefs} from "pinia";

// Variables
const props = defineProps<{ msg: string }>()
const store = userTestStore();
const count = ref(0); // Normal component state via ref.

/* The following is how we can decouple the store variable while keeping it reactive.
 * const { count } = storeToRefs(store);
 */

const ecosystem =  ref([
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ]);

// Functions
const incrementCount = (): void => {
  count.value++;
  store.count++;
}
const incrementWithAmount = (val: number): void => {
  count.value += val;
  store.count += val;
}
</script>
