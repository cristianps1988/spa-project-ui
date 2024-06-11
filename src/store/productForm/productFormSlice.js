import { createSlice, } from '@reduxjs/toolkit';

export const productFormSlice = createSlice({
    name: 'productForm',
    initialState: {
        isLoading: true,
        errorMessage: undefined,
        category: [],
        gender: [],
    },
    reducers: {
        onLoadCategories: (state, { payload = [] }) => {
            state.isLoading = false,
                payload.forEach(categ => {
                    const exist = state.category.some(dbCategory => dbCategory.id === categ.id)
                    if (!exist) {
                        state.category.push(categ)
                    }
                })
        },
        onLoadGenders: (state, { payload = [] }) => {
            state.isLoading = false,
                payload.forEach(gend => {
                    const exist = state.gender.some(dbGender => dbGender.id === gend.id)
                    if (!exist) {
                        state.gender.push(gend)
                    }
                })
        },

        onLogoutProdctForm: (state) => {
            state.isLoading = true,
                state.category = [],
                state.gender = []
        }
    }
});
export const { onLoadCategories, onLoadGenders, onLogoutProdctForm } = productFormSlice.actions;