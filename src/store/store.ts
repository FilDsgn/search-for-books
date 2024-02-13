import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { booksAPI } from "../services/BooksService";
import books from "./reducers/BooksSlice";

const rootReducer = combineReducers({
  books,
  [booksAPI.reducerPath]: booksAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(booksAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
