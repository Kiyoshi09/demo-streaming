import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'e647ed11f1c3ffb1522657bb593ee4bb';

const streamingApi = createApi({
  reducerPath: 'streamingApi',

  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.themoviedb.org/3' 
  }),

  endpoints: (builder) => ({
    // Get configuration information for API
    getConfiguration: builder.query({
      query: () => {
        return {
          url: '/configuration',
          method: 'GET',
          params: {
            api_key: API_KEY,
          }
        }
      }
    }),

    // Get Movie Image
    getMovieImage: builder.query({
      query: (movieid) => {
        return {
          url: `/movie/${movieid}/images`,
          method: 'GET',
          params: {
            api_key: API_KEY,
            include_image_language: 'en',
          }
        }
      }
    }),

    // Get Popular Movie
    getMoviePopular: builder.query({
      query: () => {
        return {
          url: '/movie/popular',
          method: 'GET',
          params: {
            api_key: API_KEY,
            page: 1,
          }
        }
      }
    }),

  })
});

export const { 
  useGetConfigurationQuery, 
  useGetMoviePopularQuery, 
  useGetMovieImageQuery,
} = streamingApi;

export { streamingApi };