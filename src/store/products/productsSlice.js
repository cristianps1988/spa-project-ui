import { createSlice, } from '@reduxjs/toolkit';
const initialValues = {
    id: null,
    name: "",
    category: 0,
    gender: 0,
    promo: false,
    favorite: false,
    photo: ""
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        activeProduct: initialValues,
        loadingProduct: true
    },
    reducers: {
        onLoadProducts: (state, { payload = [] }) => {
            state.loadingProduct = false;
            state.products = payload;
        },

        onSetActiveProduct: (state, { payload }) => {
            state.activeProduct = payload.id === null
                ? state.activeProduct = initialValues
                : state.activeProduct = state.products.filter(product => product.id == payload)[0]
        },

        onAddNewProduct: (state, { payload }) => {
            state.products.push(payload);
            state.activeProduct = initialValues;
            state.loadingProduct = false
        },

        onUpdateProduct: (state, { payload }) => {
            state.products = state.products.map(product => {
                if (product.id === payload.id) {
                    return payload;
                }
                return product
            })
            state.loadingProduct = false
        },
        onDeleteProduct: (state, { payload }) => {
            state.products = state.products.filter(prod => prod.id !== payload)
            state.activeProduct = initialValues
            state.loadingProduct = false
        },
        onLoading: (state) => {
            state.loadingProduct = true
        }
    }
});
export const { onLoadProducts, onSetActiveProduct, onAddNewProduct, onUpdateProduct, onDeleteProduct, onLoading } = productsSlice.actions;