import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const beersApi: any = createApi({
  reducerPath: "beersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.punkapi.com/v2/" }),
  endpoints: (builder) => ({
    getAllBeers: builder.query({
      query: () => "beers",
    }),
    getPageBeers: builder.query({
      query: (page: number) => `beers?per_page=12&page=${page}`,
    }),
    getBeer: builder.query({
      query: (id: number) => `beers/${id}`,
    }),
  }),
});

export const { useGetAllBeersQuery, useGetBeerQuery, useGetPageBeersQuery } =
  beersApi;
