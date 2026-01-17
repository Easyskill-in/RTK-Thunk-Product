import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './ProductSlice.js'

const Store = configureStore({
    reducer: {
        Product: ProductSlice
    }
})


export default Store