import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
interface ProductState {
  name: string;
  stock: number;
  seller: string;
  ratings: number;
  price: number;
  numOfReview: number;
  description: string;
  category: string;
  createdAt: string;
  images: IProductImages[];
  reviews: IProductReviews[];
}
[];

const initialState: ProductState[] = [
  {
    name: "",
    stock: 0,
    seller: "",
    ratings: 0,
    price: 0,
    numOfReview: 0,
    description: "",
    category: "",
    createdAt: "",
    images: [],
    reviews: [],
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductState[]>) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
