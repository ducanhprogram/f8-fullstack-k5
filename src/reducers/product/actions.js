import productService from "@/services/productService";
import {
    ADD_PRODUCT,
    GET_DETAIL_PRODUCT,
    SET_DETAIL_PRODUCT,
    SET_PRODUCTS,
} from "./constants";

export const addProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload,
    };
};

export const getProducts = () => {
    return async (dispatch) => {
        const response = await productService.getAll();
        dispatch(setProducts(response.data.items));
    };
};

export const setProducts = (payload) => {
    return {
        type: SET_PRODUCTS,
        payload,
    };
};

export const getDetailProduct = (slug) => {
    return async (dispatch) => {
        dispatch({
            type: GET_DETAIL_PRODUCT,
        });
        try {
            const product = await productService.getOne(slug);
            console.log("Product data:", product);
            dispatch(setDetailProduct(product.data));
        } catch (error) {
            console.log(error);
        }
    };
};

export const setDetailProduct = (payload) => {
    return {
        type: SET_DETAIL_PRODUCT,
        payload,
    };
};
