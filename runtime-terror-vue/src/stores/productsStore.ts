import {defineStore} from "pinia";
import {Product} from "../models/StoreModels";
import axios, {AxiosResponse} from "axios";

export type ProductStoreState = {
    allProducts: Product[],
    products: Product[],
    filteredProducts: Product[],
    fetchProductsError: string,
    addProductError: string
    removeProductError: string,
    tableDataLoading: boolean
}

const productStoreUrls = {
    getProducts: 'http://localhost:3000/products'
}

export const userProductsStore = defineStore("products", {
    state: () => ({
        allProducts: [],
        products: [],
        filteredProducts: [],
        fetchProductsError: '',
        addProductError: '',
        removeProductError: '',
        tableDataLoading: false,
    } as ProductStoreState),
    actions: {
        fetchProducts() {
            this.tableDataLoading = true;
            axios.get(productStoreUrls.getProducts).then((response: AxiosResponse<any>) => {
                this.allProducts = response.data;
                this.products = response.data.filter((item: Product) => !item.removed);
                this.fetchProductsError = '';
                this.tableDataLoading = false;
            }).catch((error: any) => {
                this.allProducts = [];
                this.products = [];
                this.fetchProductsError = error.message;
                this.tableDataLoading = false;
            });
        },
        addProduct(product: Product) {
            axios.post(productStoreUrls.getProducts, product)
                .then((response: AxiosResponse<any>) => {
                    this.fetchProducts();
                    this.addProductError = '';
                })
                .catch((error) => {
                    this.addProductError = `New item could not be added because: ${error.message}`;
                });
        },
        removeProduct(id: number) {
            const product = this.products.find((product: Product) => product.id === id);
            if (product) {
                product.removed = true;
                axios.put(`${productStoreUrls.getProducts}/${id}`, product)
                    .then((response: AxiosResponse<any>) => {
                        this.fetchProducts();
                        this.removeProductError = '';
                    }).catch((error) => {
                        this.removeProductError = `Item with id ${id} could not be remove: ${error.message}`;
                    });
            } else {
                this.removeProductError = `Product with id ${id} could not be found`;
            }
        },
        filterProducts(value: string) {
            this.tableDataLoading = true;

            setTimeout(() => {
                this.filteredProducts = this.products.filter((product: Product) =>
                    product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                );
                this.tableDataLoading = false;
            }, 2000)
        }
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        latestId(state) {
            const length = state.allProducts.length;
            return state.allProducts[length - 1].id;
        }
    },
})
