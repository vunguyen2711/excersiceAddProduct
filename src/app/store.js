import { configureStore } from "@reduxjs/toolkit";
import productAddition from "../features/productSlice";
export const store = configureStore({
  reducer: {
    productaddition: productAddition,
  },
});
