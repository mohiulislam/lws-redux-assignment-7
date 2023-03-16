import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchBy: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchBy = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
