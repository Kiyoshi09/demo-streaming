import React from 'react';
import { 
  useGetMovieImageQuery, 
  useGetMovieYoutubeTrailerQuery, 
  useGetMovieDetailsQuery,
  useGetUpcomingMoviesQuery,
  useGetTvOnTheAirQuery,
  useGetTVImageQuery,
  useGetTVYoutubeTrailerQuery,
  useGetTVDetailsQuery,
  useGetTvTopRatedQuery,
} from '../redux/store/api/streamingApi';
import Row from './Row';
import { View } from '@aws-amplify/ui-react';

const VideoListPopularComponent = ({apiConfig}) => {
  return (
    <>
    <View>
        <Row 
          apiConfig={apiConfig} 
          title="Upcoming Movies" 
          getData={useGetUpcomingMoviesQuery} 
          imageQuery={useGetMovieImageQuery} 
          trailerQuery={useGetMovieYoutubeTrailerQuery}
          getDetailData={useGetMovieDetailsQuery} 
          type="movie" />
      </View>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Top Rated TV" 
          getData={useGetTvTopRatedQuery} 
          imageQuery={useGetTVImageQuery} 
          trailerQuery={useGetTVYoutubeTrailerQuery}
          getDetailData={useGetTVDetailsQuery} 
          type="tv"/>
      </View>
    </>
  );
}

export default VideoListPopularComponent;

