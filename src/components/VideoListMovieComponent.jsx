import React from 'react';
import { 
  useGetMovieImageQuery, 
  useGetMoviePopularQuery, 
  useGetMovieYoutubeTrailerQuery, 
  useGetMovieDetailsQuery,
  useGetUpcomingMoviesQuery,
  useGetMovieTopRatedQuery,
  useGetMovieActionQuery,
  useGetMovieAnimationQuery,
  useGetMovieComedyQuery,
  useGetMovieSFQuery,
} from '../redux/store/api/streamingApi';
import Row from './Row';
import { View } from '@aws-amplify/ui-react';
import VideoTitleVideo from './VideoTitleVideo';

const VideoListMovieComponent = ({apiConfig}) => {

  return (
    <>
      <View>
        <VideoTitleVideo 
          apiConfig={apiConfig} 
          getUpcomingMovies={useGetUpcomingMoviesQuery}
          trailerQuery={useGetMovieYoutubeTrailerQuery}
        />
      </View>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Popular" 
          getData={useGetMoviePopularQuery} 
          imageQuery={useGetMovieImageQuery} 
          trailerQuery={useGetMovieYoutubeTrailerQuery}
          getDetailData={useGetMovieDetailsQuery} 
          type="movie"/>
      </View>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Top Rated" 
          getData={useGetMovieTopRatedQuery} 
          imageQuery={useGetMovieImageQuery} 
          trailerQuery={useGetMovieYoutubeTrailerQuery}
          getDetailData={useGetMovieDetailsQuery} 
          type="movie"/>
      </View>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Action" 
          getData={useGetMovieActionQuery} 
          imageQuery={useGetMovieImageQuery} 
          trailerQuery={useGetMovieYoutubeTrailerQuery}
          getDetailData={useGetMovieDetailsQuery} 
          type="movie"/>
      </View>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Animation" 
          getData={useGetMovieAnimationQuery} 
          imageQuery={useGetMovieImageQuery} 
          trailerQuery={useGetMovieYoutubeTrailerQuery}
          getDetailData={useGetMovieDetailsQuery} 
          type="movie"/>
      </View>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Science Fiction" 
          getData={useGetMovieSFQuery} 
          imageQuery={useGetMovieImageQuery} 
          trailerQuery={useGetMovieYoutubeTrailerQuery}
          getDetailData={useGetMovieDetailsQuery} 
          type="movie" />
      </View>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Comedy" 
          getData={useGetMovieComedyQuery} 
          imageQuery={useGetMovieImageQuery} 
          trailerQuery={useGetMovieYoutubeTrailerQuery}
          getDetailData={useGetMovieDetailsQuery} 
          type="movie" />
      </View>
    </>
  );
}

export default VideoListMovieComponent;
