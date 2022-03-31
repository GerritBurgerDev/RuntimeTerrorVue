import { defineStore } from "pinia";
import {Product} from "../models/StoreModels";

export type ProductStoreState = {
    products: Product[];
}

export const userProductsStore = defineStore("products", {
    state: () => ({
        products: []
    } as ProductStoreState),
    actions: {
        setProducts(newProducts: Product[]) {
            this.products = newProducts;
        },
        addProduct(product: Product) {
            this.products = [
                ...this.products,
                product
            ];
        },
        removeProduct(name: string) {
            this.products = this.products.filter(product => product.name != name);
        }
    },
    getters: {
    },
})
