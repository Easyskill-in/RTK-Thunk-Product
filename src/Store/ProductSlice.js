import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const FetchProduct = createAsyncThunk("Product/Get", async () => {
    try {
        console.log("\n\nFetching Product.....")
        const res = await axios.get("https://fakestoreapi.com/products")
        return res.data;
    } catch (error) {
        return error.message
    }
});

const ProductSlice = createSlice({
    name: "Product",
    initialState: {
        item: [],
        loading: false,
        error: null
    },
    reducers:{
        add: (state, action) => {
            state.item.unshift(action.payload)
        },
        remove: (state, action) => {
            state.item = state.item.filter((value, index) => {
                return value.id !== action.payload
            })

        },
        reset: (state) => {
            state.item = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchProduct.pending, (state) => {
            state.loading = true;
        }).addCase(FetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            console.log("From Thunk : ", state, action)
            state.item.push(...action.payload)
        }).addCase(FetchProduct.rejected, (state, action) => {
            state.error = action.payload
        })
    }

})

export { FetchProduct }
export const { add, remove, reset } = ProductSlice.actions
export default ProductSlice.reducer