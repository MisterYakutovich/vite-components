import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const beersApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/beers?' }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => `page=2&per_page=80`,
    }),
    getDataName: builder.query({
      query: (searchTerm) => `beer_name=${searchTerm}`,
    }),
  }),
});

export const { useGetDataQuery } = beersApi;


/*export const beersApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.punkapi.com/v2/beers?" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getBeersByName: builder.query({
      query: () => "page=2&per_page=80",
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetBeersByNameQuery } = beersApi*/
