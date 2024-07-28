import { createSlice } from "@reduxjs/toolkit";

const Categorylice = createSlice({
  name: "category",
  initialState: { loading: false, categoryCount: {} },
  reducers: {
    categoryRequest: (state, action) => {
      return { loading: true };
    },
    categorySuccess: (state, action) => {
      return {
        loading: false,
        category: action.payload.data,
        categoryCount: action.payload.data.length,
        categoryPerPage: 10,
      };
    },
    categoryFailure: (state, action) => {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = Categorylice;
export const { categoryRequest, categorySuccess, categoryFailure } = actions;
export default reducer;
