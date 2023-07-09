import React from 'react'
import styled from 'styled-components';
import { Loader, Text, View, Flex } from '@aws-amplify/ui-react';
import VideoImageCard4MyList from './VideoImageCard4MyList';
import { 
  useGetMovieImageQuery, 
  useGetMovieYoutubeTrailerQuery, 
  useGetMovieDetailsQuery,
  useGetTVImageQuery,
  useGetTVYoutubeTrailerQuery,
  useGetTVDetailsQuery,
  useMultiSearchQuery,
} from '../redux/store/api/streamingApi';

const VideoListSearchComponent = ({apiConfig, searchWords}) => {
  const imgBaseUrl = apiConfig.images.secure_base_url;
  const { data, error, isFetching } = useMultiSearchQuery(searchWords);

  if ( isFetching ) {
    return <Loader size='large' />;
  }
  else if ( error ) {
    return <StyledTextErrorMsg as='p'>Error Loading Contents</StyledTextErrorMsg>;
  }
  else {
    return ( 
      <View style={{marginBottom: "200px"}}>
        <StyledViewRow>
          <StyledTextTitle as='p'>Search</StyledTextTitle>
        </StyledViewRow>
        <Flex direction="row" wrap="wrap" gap="1.0rem" style={{marginLeft: "30px"}}>
          {
            data.results.map((d) => (
              <View key={d.id}>
                {
                  d.media_type === 'movie' ? 
                  <VideoImageCard4MyList
                      videoId={d.id} 
                      type='movie' 
                      imageBaseUrl={imgBaseUrl}
                      getDetailData={useGetMovieDetailsQuery}
                      imageQuery={useGetMovieImageQuery}
                      trailerQuery={useGetMovieYoutubeTrailerQuery}
                  />
                  :
                  <VideoImageCard4MyList
                    videoId={d.id} 
                    type='tv' 
                    imageBaseUrl={imgBaseUrl}
                    getDetailData={useGetTVDetailsQuery}
                    imageQuery={useGetTVImageQuery}
                    trailerQuery={useGetTVYoutubeTrailerQuery}
                  />
                }
              </View>
            ))
          }
        </Flex>
      </View>
    )
  }
}

export default VideoListSearchComponent

const StyledTextErrorMsg = styled(Text)`
  font-size: 28px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: center;
`;

const StyledViewRow = styled(View)`
  position: relative;
  margin: 30px 30px 30px 30px;
`;

const StyledTextTitle = styled(Text)`
  font-size: 28px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: left;
  margin-block: 10px;
`;