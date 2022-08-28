import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
console.log(initialState);
export const productAddition = createSlice({
  name: "productaddition",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push(payload);
    },
    deleteProduct: (state, { payload }) => {
      state.products.splice(payload, 1);
    },
  },
});

export const { addProduct, deleteProduct } = productAddition.actions;
export const allProducts = (state) => state.productaddition.products;
export default productAddition.reducer;
