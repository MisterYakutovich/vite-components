import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const beersApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/beers' }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (page = 2, per_page = 80) => `?/page=${page}&per_page=${per_page}`,
    }),
    getDataId: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetDataQuery, useGetDataIdQuery } = beersApi;
