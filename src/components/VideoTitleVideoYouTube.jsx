import React from 'react'
import styled from 'styled-components';
import { View, Loader, Text } from '@aws-amplify/ui-react';
import YouTube from 'react-youtube';

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  }
}

const VideoTitleVideoYouTube = ({videoId, trailerQuery}) => {

  const { data, error, isFetching } = trailerQuery(videoId);

  // YouTube Events
  const handleReady = (video) => {
  }
  const handlePlay = (video) => {
  }
  const handlePause = (video) => {
  }
  const handleEnd = (video) => {
  }

  let trailerVideo;
  if (isFetching) {
    trailerVideo = 
                <StyledViewLoaderContainer>
                  <StyledLoader size='large' variation='linear'/>
                </StyledViewLoaderContainer>
  }
  else if (error) {
    trailerVideo = <StyledTextErrorMsg as='p'>Error Loading Trailer Video</StyledTextErrorMsg>
  }
  else {
    const youtubeVideoId = data.results[0]?.key;

    trailerVideo = <StyledViewYouTubeContainer>
                    <YouTube 
                      videoId={ youtubeVideoId } 
                      opts={ opts } 
                      onReady={ handleReady }
                      onPlay={ handlePlay }
                      onPause={ handlePause }
                      onEnd={ handleEnd }
                    />
                  </StyledViewYouTubeContainer>
  }

  return (
    <>{trailerVideo}</>
  )
}

export default VideoTitleVideoYouTube

const StyledTextErrorMsg = styled(Text)`
  font-size: 28px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: center;
`;

const StyledViewLoaderContainer = styled(View)`
  position: relative;
`;

const StyledLoader = styled(Loader)`
  position: absolute;
  top: 250px;
  left: 150px;
  width: 60%;
`;

const StyledViewYouTubeContainer = styled(View)`
  position: absolute;
  top: 80px;
`;
