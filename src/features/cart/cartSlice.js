import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new item
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      // payload = pizzaID
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getTotalCartQuantity = createSelector(
  [(store) => store.cart.cart],
  (cart) => cart.reduce((sum, item) => sum + item.quantity, 0),
);

export const getTotalCartPrice = createSelector(
  [(store) => store.cart.cart],
  (cart) => cart.reduce((sum, item) => sum + item.totalPrice, 0),
);
export default cartSlice.reducer;
