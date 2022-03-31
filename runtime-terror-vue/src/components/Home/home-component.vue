<template src="./home-component.html"></template>
<style src="./home-component.scss"></style>

<script setup lang="ts">
import {onBeforeMount, onUpdated, ref, watch} from "vue";
  import {fetchProducts} from "../../services/fetchers";
  import {userProductsStore} from "../../stores/productsStore";

  const productStore = userProductsStore();

  const products = ref([] as any[]);
  const errorMessage = ref('');

  /*
   * Adding a watched to changed ref values -> like "useState()" in a sense
   * more simplex watchers don't need the callback i.e. watch(stringVal, (new, old) => {});
   */
  watch(() => [...products.value], (newVal, oldVal) => {
    productStore.setProducts(newVal);
  });

  onBeforeMount(async () => {
    try {
      products.value = productStore.products ?? await fetchProducts();
    } catch (error) {
      errorMessage.value = 'Oh no!';
    }
  });
</script>
