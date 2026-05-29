import { createSlice } from "@reduxjs/toolkit";

const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);

const userEmail =
  currentUser?.email || "guest";

const savedCart =
  JSON.parse(
    localStorage.getItem(
      `cart_${userEmail}`
    )
  ) || [];

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: savedCart,
  },

  reducers: {

    addToCart: (state, action) => {

      const item = state.cartItems.find(
        (product) =>
          product.id === action.payload.id
      );

      if (item) {

        item.quantity += 1;

      } else {

        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });

      }

      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      if (currentUser) {

        localStorage.setItem(
          `cart_${currentUser.email}`,
          JSON.stringify(state.cartItems)
        );

      }

    },

    removeFromCart: (state, action) => {

      state.cartItems =
        state.cartItems.filter(
          (item) =>
            item.id !== action.payload
        );

      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      if (currentUser) {

        localStorage.setItem(
          `cart_${currentUser.email}`,
          JSON.stringify(state.cartItems)
        );

      }

    },

    increaseQuantity: (state, action) => {

      const item = state.cartItems.find(
        (product) =>
          product.id === action.payload
      );

      if (item) {

        item.quantity += 1;

      }

      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      if (currentUser) {

        localStorage.setItem(
          `cart_${currentUser.email}`,
          JSON.stringify(state.cartItems)
        );

      }

    },

    decreaseQuantity: (state, action) => {

      const item = state.cartItems.find(
        (product) =>
          product.id === action.payload
      );

      if (
        item &&
        item.quantity > 1
      ) {

        item.quantity -= 1;

      }

      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      if (currentUser) {

        localStorage.setItem(
          `cart_${currentUser.email}`,
          JSON.stringify(state.cartItems)
        );

      }

    },

    clearCart: (state) => {

      state.cartItems = [];

      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      if (currentUser) {

        localStorage.setItem(
          `cart_${currentUser.email}`,
          JSON.stringify([])
        );

      }

    },

  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;