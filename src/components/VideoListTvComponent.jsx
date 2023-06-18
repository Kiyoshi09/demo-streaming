import React from 'react';
import { 
  useGetTVImageQuery,
  useGetTVYoutubeTrailerQuery,
  useGetTVDetailsQuery,
  useGetTvPopularQuery,
  useGetTvTopRatedQuery,
  useGetTvActionAdventureQuery,
  useGetTvDramaQuery,
} from '../redux/store/api/streamingApi';
import Row from './Row';
import { View } from '@aws-amplify/ui-react';

const VideoListTvComponent = ({apiConfig}) => {
  return (
    <>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Popular" 
          getData={useGetTvPopularQuery} 
          imageQuery={useGetTVImageQuery} 
          trailerQuery={useGetTVYoutubeTrailerQuery}
          getDetailData={useGetTVDetailsQuery} 
          type="tv"/>
      </View>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Top Rated" 
          getData={useGetTvTopRatedQuery} 
          imageQuery={useGetTVImageQuery} 
          trailerQuery={useGetTVYoutubeTrailerQuery}
          getDetailData={useGetTVDetailsQuery} 
          type="tv"/>
      </View>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Action & Adventure" 
          getData={useGetTvActionAdventureQuery} 
          imageQuery={useGetTVImageQuery} 
          trailerQuery={useGetTVYoutubeTrailerQuery}
          getDetailData={useGetTVDetailsQuery} 
          type="tv"/>
      </View>
      <View>
        <Row 
          apiConfig={apiConfig} 
          title="Drama" 
          getData={useGetTvDramaQuery} 
          imageQuery={useGetTVImageQuery} 
          trailerQuery={useGetTVYoutubeTrailerQuery}
          getDetailData={useGetTVDetailsQuery} 
          type="tv"/>
      </View>
    </>
  );
}

export default VideoListTvComponent;