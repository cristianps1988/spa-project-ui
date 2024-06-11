import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, productsSlice, authSlice, productFormSlice } from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        products: productsSlice.reducer,
        auth: authSlice.reducer,
        productForm: productFormSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})