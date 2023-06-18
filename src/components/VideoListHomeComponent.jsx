import React from 'react';
import { View } from '@aws-amplify/ui-react';
import { 
  useGetMovieImageQuery, 
  useGetMovieYoutubeTrailerQuery, 
  useGetMovieDetailsQuery,
  useGetMoviesReleased2023Query,
  useGetTvReleased2023Query,
  useGetTvOnTheAirQuery,
  useGetTVImageQuery,
  useGetTVYoutubeTrailerQuery,
  useGetTVDetailsQuery,
  useGetMoviesNowPlayingQuery,
} from '../redux/store/api/streamingApi';
import VideoHomeTopMovie from './VideoHomeTopMovie';
import Row from './Row';

const VideoListHomeComponent = ({apiConfig}) => {
  return (
    <>
    <View>
      <VideoHomeTopMovie />
    </View>
    <View>
      <Row 
        apiConfig={apiConfig} 
        title="Movies released in 2023" 
        getData={useGetMoviesReleased2023Query} 
        imageQuery={useGetMovieImageQuery} 
        trailerQuery={useGetMovieYoutubeTrailerQuery}
        getDetailData={useGetMovieDetailsQuery} 
        type="movie"/>
    </View>
    <View>
      <Row 
        apiConfig={apiConfig} 
        title="TV shows released in 2023" 
        getData={useGetTvReleased2023Query} 
        imageQuery={useGetTVImageQuery} 
        trailerQuery={useGetTVYoutubeTrailerQuery}
        getDetailData={useGetTVDetailsQuery} 
        type="tv"/>
    </View>
    <View>
      <Row 
        apiConfig={apiConfig} 
        title="Movies Now Playing" 
        getData={useGetMoviesNowPlayingQuery} 
        imageQuery={useGetMovieImageQuery} 
        trailerQuery={useGetMovieYoutubeTrailerQuery}
        getDetailData={useGetMovieDetailsQuery} 
        type="movie"/>
    </View>
    <View>
      <Row 
        apiConfig={apiConfig} 
        title="TV on the air" 
        getData={useGetTvOnTheAirQuery} 
        imageQuery={useGetTVImageQuery} 
        trailerQuery={useGetTVYoutubeTrailerQuery}
        getDetailData={useGetTVDetailsQuery} 
        type="tv" />
    </View>
  </>
  );
}

export default VideoListHomeComponent;