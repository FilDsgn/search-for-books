import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isEqual } from "lodash";

interface BookState {
  searchText: string;
  category: string;
  sortingBy: string;
  resultsCount: number;
  startIndex: number;
  booksData: [];
}

const initialState: BookState = {
  searchText: "",
  category: "all",
  sortingBy: "relevance",
  resultsCount: 0,
  startIndex: 0,
  booksData: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooksData: (state, action: PayloadAction<[]>) => {
      state.booksData = [...state.booksData, ...action.payload];
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSortingBy: (state, action: PayloadAction<string>) => {
      state.sortingBy = action.payload;
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload;
    },
    setResultsCount: (state, action: PayloadAction<number>) => {
      state.resultsCount = action.payload;
    },
    removeBooksData: (state) => {
      state.booksData = [];
    },
  },
});

export default booksSlice.reducer;
export const {
  setBooksData,
  setSearchText,
  setCategory,
  setSortingBy,
  setStartIndex,
  setResultsCount,
  removeBooksData,
} = booksSlice.actions;
