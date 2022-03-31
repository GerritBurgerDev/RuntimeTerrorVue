import axios from "axios";
import {Product} from "../models/StoreModels";

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get('http://localhost:3000/products');
    return response.data;
}
