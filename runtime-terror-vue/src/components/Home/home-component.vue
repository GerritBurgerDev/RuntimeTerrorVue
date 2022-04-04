<template>
  <v-container>
    <v-row class="text-center">
      <v-col
          class="mb-5"
          cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Welcome to the RTV Example Demo!
        </h2>

        <v-container v-if="!fetchProductsError">
          <div class="table-actions-container">
            <span v-if="addProductError">
              {{ addProductError }}
            </span>
            <input v-model="searchValue" @input=""/>
            <v-btn class="add-product-button" @click="addNewProduct" data-cy="add-product-button">
              Add Product
            </v-btn>
          </div>

          <products-table-component :loading="tableDataLoading" :products="searchValue ? filteredProducts : products"/>
        </v-container>
        <v-container v-else>
          {{ fetchProductsError }}
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<style src="./home-component.scss"></style>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref, watch} from "vue";
  import {userProductsStore} from "../../stores/productsStore";
  import ProductsTableComponent from "./ProductsTable/products-table-component.vue";
  import {storeToRefs} from "pinia";
  import {Product} from "@/src/models/StoreModels";
  import useDebouncedRef from "../../services/product.service";

  const productStore = userProductsStore();
  const { filteredProducts, tableDataLoading, fetchProductsError, addProductError } = storeToRefs(productStore);

  const searchValue = useDebouncedRef('');

  const products = computed((): Product[] => {
    return productStore.getProducts;
  });

  const addNewProduct = (): void => {
    const product: Product = {
      id: productStore.latestId + 1,
      name: 'New item',
      imageLink: '../../../public/favicon.ico',
      description: 'This is the description of the newly added item',
      price: 150,
      removed: false
    };

    productStore.addProduct(product);
  }

  watch(searchValue, newSearchVal => {
    searchProduct(newSearchVal);
  })

  const searchProduct = (value: string) => {
    productStore.filterProducts(searchValue.value);
  }

  onMounted( () => {
    productStore.$reset();
    productStore.fetchProducts();
  });
</script>
