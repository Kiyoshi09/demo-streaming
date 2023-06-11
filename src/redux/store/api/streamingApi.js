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

    // Get Youtube Video for Movie
    getMovieYoutubeTrailer: builder.query({
      query: (movieid) => {
        return {
          url: `/movie/${movieid}/videos`,
          method: 'GET',
          params: {
            api_key: API_KEY,
            include_image_language: 'en',
          }
        }
      }
    }),

    // Get Details for Movie
    getMovieDetails: builder.query({
        query: (movieid) => {
          return {
            url: `/movie/${movieid}`,
            method: 'GET',
            params: {
              api_key: API_KEY,
            }
          }
        }
    }),

    // Get the latest movie
    getLatestMovie: builder.query({
      query: () => {
        return {
          url: '/movie/latest',
          method: 'GET',
          params: {
            api_key: API_KEY,
          }
        }
      }
    }),

    // Get the upcoming movies
    getUpcomingMovies: builder.query({
      query: () => {
        return {
          url: '/movie/upcoming',
          method: 'GET',
          params: {
              api_key: API_KEY,
          }
        }
      }
    }),

    // Get Top Rated Movie
    getMovieTopRated: builder.query({
      query: () => {
        return {
          url: '/movie/top_rated',
          method: 'GET',
          params: {
            api_key: API_KEY,
            page: 1,
          }
        }
      }
    }),

    // Get Action Movie
    getMovieAction: builder.query({
      query: () => {
        return {
          url: '/discover/movie',
          method: 'GET',
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
            "vote_average.gte": 5.5,
            "release_date.gte": '2021-01-01',
            with_genres: 27,
          }
        }
      }
    }),

    // Get Animation Movie
    getMovieAnimation: builder.query({
      query: () => {
        return {
          url: '/discover/movie',
          method: 'GET',
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
            "vote_average.gte": 5.5,
            "release_date.gte": '2021-01-01',
            with_genres: 16,
          }
        }
      }
    }),

    // Get Comedy Movie
    getMovieComedy: builder.query({
      query: () => {
        return {
          url: '/discover/movie',
          method: 'GET',
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
            "vote_average.gte": 7.0,
            "release_date.gte": '2021-01-01',
            with_genres: 35,
          }
        }
      }
    }),

    // Get SF Movie
    getMovieSF: builder.query({
      query: () => {
        return {
          url: '/discover/movie',
          method: 'GET',
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
            "vote_average.gte": 7.0,
            "release_date.gte": '2021-01-01',
            with_genres: 878,
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
  useGetMovieYoutubeTrailerQuery,
  useGetMovieDetailsQuery,
  useGetLatestMovieQuery,
  useGetUpcomingMoviesQuery,
  useGetMovieTopRatedQuery,
  useGetMovieActionQuery,
  useGetMovieAnimationQuery,
  useGetMovieComedyQuery,
  useGetMovieSFQuery,
} = streamingApi;

export { streamingApi };