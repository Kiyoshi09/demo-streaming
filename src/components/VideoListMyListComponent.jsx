import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { View, Text, Flex } from '@aws-amplify/ui-react';
// import { QueryWishListByProfileIdApi } from '../apis/QueryWishListByIdApi';
import VideoImageCard4MyList from './VideoImageCard4MyList';
import { useGetMovieImageQuery, useGetMovieYoutubeTrailerQuery, useGetMovieDetailsQuery, useGetTVImageQuery, useGetTVYoutubeTrailerQuery, useGetTVDetailsQuery } from '../redux/store/api/streamingApi';

const VideoListMyListComponent = ({ apiConfig }) => {
  const userprofile = useSelector((state) => {
    return state.userprofile;
  });
  const [wishLists, setWishLists] = useState([]);
  const imgBaseUrl = apiConfig.images.secure_base_url;

  const getWishLists = useCallback(async () => {
    //** GraphQL の処理に変更する **/
    // const a = await QueryWishListByProfileIdApi({profileId: userprofile.id});
    // あとで有効化
    // setWishLists(a);
  }, [userprofile.id]);

  useEffect(() => {
    getWishLists();
  }, [getWishLists]);

  return (
    <View style={{ marginBottom: '200px' }}>
      <StyledViewRow>
        <StyledTextTitle as="p">My List</StyledTextTitle>
        <Flex direction="row" wrap="wrap" gap="1.0rem">
          {wishLists
            .filter((w) => w._version !== undefined)
            .map((wish) => (
              <View key={wish.id}>
                {wish.contentsType === 'movie' ? (
                  <VideoImageCard4MyList videoId={wish.contentsId} type="movie" imageBaseUrl={imgBaseUrl} getDetailData={useGetMovieDetailsQuery} imageQuery={useGetMovieImageQuery} trailerQuery={useGetMovieYoutubeTrailerQuery} />
                ) : (
                  <VideoImageCard4MyList videoId={wish.contentsId} type="tv" imageBaseUrl={imgBaseUrl} getDetailData={useGetTVDetailsQuery} imageQuery={useGetTVImageQuery} trailerQuery={useGetTVYoutubeTrailerQuery} />
                )}
              </View>
            ))}
        </Flex>
      </StyledViewRow>
    </View>
  );
};

export default VideoListMyListComponent;

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
