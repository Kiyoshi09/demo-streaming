import { configureStore } from "@reduxjs/toolkit";
import userprofileReducer from "../userprofileSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { streamingApi } from "./api/streamingApi";

export const store = configureStore({
  reducer: {
    userprofile: userprofileReducer,
    [streamingApi.reducerPath]: streamingApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(streamingApi.middleware);
  }
});

setupListeners(store.dispatch);

export { 
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
  useGetTvLatestQuery,
  useGetTvOnTheAirQuery,
  useGetTvPopularQuery,
  useGetTVImageQuery,
  useGetTVYoutubeTrailerQuery,
  useGetTVDetailsQuery,
  useGetTvTopRatedQuery,
  useGetMovieMostPopularSince2023Query,
  useGetMoviesReleased2023Query,
  useGetMoviesNowPlayingQuery,
  useGetTvReleased2023Query,
  useGetTvActionAdventureQuery,
  useGetTvDramaQuery,
  useMultiSearchQuery,
} from './api/streamingApi';