import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksAPI = createApi({
  tagTypes: ["Books"],
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com",
  }),
  endpoints: (build) => ({
    fetchAllBooks: build.query({
      query: (arg) => ({
        url: "/books/v1/volumes",
        params: {
          q: arg.text + `${arg.category ? `+subject:${arg.category}` : ""}`,
          orderBy: arg.sortingBy ? arg.sortingBy : "",
          key: process.env.REACT_APP_BOOKS_API_KEY,
          startIndex: arg.startIndex || 0,
          maxResults: 30,
        },
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg.text !== previousArg.text;
      },
    }),
  }),
});
