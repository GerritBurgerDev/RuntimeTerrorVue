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

        <v-container v-if="!errorMessage">
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
            <tr
                v-for="item in products"
                :key="item.name"
            >
              <td class="text-center"><img :src="item.imageLink" alt="Image Load Error"/></td>
              <td class="text-center">{{ item.name }}</td>
              <td class="text-center">{{ item.description }}</td>
              <td class="text-center">{{ item.price }}</td>
              <td class="text-center">
                <v-btn
                    icon="mdi-delete"
                    variant="plain"
                    @click=""
                >
                  Remove
                </v-btn>
              </td>
            </tr>
            </tbody>
          </v-table>
        </v-container>
        <v-container v-else>
          {{ errorMessage }}
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<style src="./home-component.scss"></style>

<script setup lang="ts">
  import {onBeforeMount, onUpdated, ref, watch} from "vue";
  import {fetchProducts} from "../../services/fetchers";
  import {userProductsStore} from "../../stores/productsStore";
  import Product from "../../models/StoreModels";

  const productStore = userProductsStore();

  const products = ref<Product[]>([]);
  const errorMessage = ref('');

  /*
   * Adding a watched to changed ref values -> like "useState()" in a sense
   * more simplex watchers don't need the callback i.e. watch(stringVal, (new, old) => {});
   */
  watch(() => [...products.value], (newVal, oldVal) => {
    productStore.setProducts(newVal);
  });

  onBeforeMount(async (): Promise<void> => {
    products.value = productStore.products ?? await loadProducts();
  });

  const loadProducts = async (): Promise<Product[] | undefined> => {
    try {
      return await fetchProducts();
    } catch (error) {
      errorMessage.value = 'Oh no!';
    }
  }
</script>
