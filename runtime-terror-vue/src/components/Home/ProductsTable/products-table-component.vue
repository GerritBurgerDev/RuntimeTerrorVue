<template>
  <v-table
      fixed-header
  >
    <thead>
    <tr>
      <th class="text-center">
        <!-- Empty on purpose -->
      </th>
      <th class="text-center">
        Name
      </th>
      <th class="text-center">
        Description
      </th>
      <th class="text-center">
        Price
      </th>
      <th class="text-center">
      </th>
    </tr>
    </thead>
    <tbody>
    <v-progress-linear
        v-if="loading"
        indeterminate
        color="red darken-2"
    ></v-progress-linear>
    <tr v-if="!loading && hasNoProducts === true">
      <td>
        No products available
      </td>
    </tr>
    <tr
        v-for="item in products"
        :key="item.id"
        v-if="!loading"
        data-cy="product-row"
    >
      <td class="text-center"><img :src="item.imageLink" alt="Image Load Error"/></td>
      <td class="product-name text-center">{{ item.name }}</td>
      <td class="text-center">{{ item.description }}</td>
      <td class="text-center">{{ item.price }}</td>
      <td class="text-center">
        <v-btn
            icon="mdi-delete"
            variant="plain"
            @click="removeProduct(item.id)"
            data-cy="remove-product-button"
        >
          Remove
        </v-btn>
      </td>
    </tr>
    </tbody>
  </v-table>
</template>
<style src="./products-table-component.scss"></style>

<script setup lang="ts">
  import {Product} from '@/src/models/StoreModels';
  import {userProductsStore} from "../../../stores/productsStore";
  import {computed} from "vue";

  const props = defineProps<{
    products: Product[],
    loading: boolean
  }>();

  const store = userProductsStore();

  const hasNoProducts = computed(() => {
    return props.products.length === 0;
  })

  const removeProduct = (productId: number): void => {
    store.removeProduct(productId);
  }
</script>
