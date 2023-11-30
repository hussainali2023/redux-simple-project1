import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

interface Icart {
    products: IProduct[];
}

const initialState: Icart = {
    products: [],
}

const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})


export default cartslice.reducer;