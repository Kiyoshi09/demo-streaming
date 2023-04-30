import React from 'react';
import { useGetMoviePopularQuery } from '../redux/store/api/streamingApi';
import Row from './Row';

const VideoListMovieComponent = ({apiConfig}) => {

  return (
    <>
      <Row apiConfig={apiConfig} title="Popular" getData={useGetMoviePopularQuery} />
    </>
  );
}

export default VideoListMovieComponent;
