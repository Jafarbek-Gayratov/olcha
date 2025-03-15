import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: "Wishies",
  initialState: {
    value: JSON.parse(localStorage.getItem("wishes")) || [],
  },
  reducers: {
    addToWishies(state, action) {
      state.value = [...state.value, action.payload];
      localStorage.setItem("wishes", JSON.stringify(state.value));
      toast.success("Savatga qoshildi Hoshim😘💕");
    },
    removeFromWishies(state, action) {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("wishes", JSON.stringify(state.value));
    },
  },
});

export const { addToWishies, removeFromWishies } = likeSlice.actions;
export default likeSlice.reducer;
