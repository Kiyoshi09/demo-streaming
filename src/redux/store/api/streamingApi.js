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

    // Get TV on the Air
    getTvOnTheAir: builder.query({
      query: () => {
        return {
          url: '/tv/on_the_air',
          method: 'GET',
          params: {
            api_key: API_KEY,
          }
        }
      }
    }),

    // Get TV on the Air
    getTvTopRated: builder.query({
      query: () => {
        return {
          url: '/tv/top_rated',
          method: 'GET',
          params: {
            api_key: API_KEY,
            language: "en-US",
          }
        }
      }
    }),

    // Get TV Image
    getTVImage: builder.query({
      query: (tvid) => {
        return {
          url: `/tv/${tvid}/images`,
          method: 'GET',
          params: {
            api_key: API_KEY,
          }
        }
      }
    }),

    // Get Youtube Video for TV
    getTVYoutubeTrailer: builder.query({
      query: (tvid) => {
        return {
          url: `/tv/${tvid}/videos`,
          method: 'GET',
          params: {
            api_key: API_KEY,
            include_image_language: 'en',
          }
        }
      }
    }),

    // Get Details for TV
    getTVDetails: builder.query({
      query: (tvid) => {
        return {
          url: `/tv/${tvid}`,
          method: 'GET',
          params: {
            api_key: API_KEY,
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
  useGetTvOnTheAirQuery,
  useGetTVImageQuery,
  useGetTVYoutubeTrailerQuery,
  useGetTVDetailsQuery,
  useGetTvTopRatedQuery,
} = streamingApi;

export { streamingApi };