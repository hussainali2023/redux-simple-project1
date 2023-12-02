import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Icart {
    products: IProduct[];
}

const initialState: Icart = {
    products: [],
}

const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {

            const existing = state.products.find(product => product._id === action.payload._id)

            if (existing) {
                existing.quantity = existing.quantity! + 1;
            }
            else {

                state.products.push({ ...action.payload, quantity: 1 })
            }

        },
        removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
            const existing = state.products.find(product => product._id === action.payload._id)

            if (existing) {
                existing.quantity = existing.quantity! - 1;
            }
            else {

                state.products.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter(product => product._id !== action.payload._id)
        }
    }
})

export const { addToCart, removeOneFromCart, removeFromCart } = cartslice.actions;


export default cartslice.reducer;