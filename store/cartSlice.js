import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    item: {
      cartItems: [],
      totalQuantity: 0,
    },
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existItem = state.item.cartItems.find(
        (item) => item.id == newItem.id
      );
      if (!existItem) {
        state.item.cartItems.push(action.payload);
      } else {
        existItem.quantity++;
        existItem.totalPrice =
          existItem.totalPrice + newItem.afterDiscountPrice;
      }
      state.item.totalQuantity++;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existItem = state.item.cartItems.find((item) => item.id == id);
      if (existItem.quantity === 1) {
        state.item.cartItems = state.item.cartItems.filter(
          (item) => item.id != id
        );
      } else {
        existItem.quantity--;
        existItem.totalPrice =
          existItem.totalPrice - existItem.afterDiscountPrice;
      }
      state.item.totalQuantity--;
    },
    removeItemFromCartCompletely: (state, action) => {
      const id = action.payload;
      const existItem = state.item.cartItems.find((item) => item.id == id);
      state.item.cartItems = state.item.cartItems.filter(
        (item) => item.id != id
      );
    },
  },
});
export const { addItemToCart, removeItemFromCart,removeItemFromCartCompletely } = counterSlice.actions;

export default counterSlice.reducer;
