import { createSlice } from "@reduxjs/toolkit";


const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);

const userEmail =
  currentUser?.email || "guest";


const savedWishlist =
  JSON.parse(
    localStorage.getItem(
      `wishlist_${userEmail}`
    )
  ) || [];

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    wishlistItems: savedWishlist,
  },

  reducers: {

    addToWishlist: (
      state,
      action
    ) => {

      const exists =
        state.wishlistItems.find(
          (item) =>
            item.id === action.payload.id
        );

      if (!exists) {

        state.wishlistItems.push(
          action.payload
        );

      }

      const currentUser =
        JSON.parse(
          localStorage.getItem(
            "currentUser"
          )
        );

      if (currentUser) {

        localStorage.setItem(
          `wishlist_${currentUser.email}`,
          JSON.stringify(
            state.wishlistItems
          )
        );

      }

    },

    removeFromWishlist: (
      state,
      action
    ) => {

      state.wishlistItems =
        state.wishlistItems.filter(
          (item) =>
            item.id !== action.payload
        );

      const currentUser =
        JSON.parse(
          localStorage.getItem(
            "currentUser"
          )
        );

      if (currentUser) {

        localStorage.setItem(
          `wishlist_${currentUser.email}`,
          JSON.stringify(
            state.wishlistItems
          )
        );

      }

    },

    clearWishlist: (
      state
    ) => {

      state.wishlistItems = [];

      const currentUser =
        JSON.parse(
          localStorage.getItem(
            "currentUser"
          )
        );

      if (currentUser) {

        localStorage.setItem(
          `wishlist_${currentUser.email}`,
          JSON.stringify([])
        );

      }

    },

  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;