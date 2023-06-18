import React from 'react'
import styled from 'styled-components';
import { View, Text } from '@aws-amplify/ui-react';

const VideoHomeTopMovie = () => {
  const youtubeKey = "8rHNp7cPUb0";
  const url = `https://www.youtube.com/embed/${youtubeKey}?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&disablekb=1&iv_load_policy=3&playsinline=1&loop=1&playlist=${youtubeKey}`;

  return (
    <StyledViewHomeTopContainer>
      <StyledViewOverlayContainer>
        <StyledTextVideoTitle>The Super Mario Bros. Movie</StyledTextVideoTitle>
        <View>
        While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.
        </View>
      </StyledViewOverlayContainer>
      <StyledViewYoutubeContainer>
        <StyledIFrame
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" />
      </StyledViewYoutubeContainer>
    </StyledViewHomeTopContainer>
  )
}

export default VideoHomeTopMovie

const StyledViewHomeTopContainer = styled(View)`
  color: white;

  @media screen and (max-width: 1279px){
    display: none;
  }
`;

const StyledViewOverlayContainer = styled(View)`
  position: absolute;
  display: block;
  top: 20vh;
  left: 50px;
  width: 500px;
  height: 200px;
  z-index: 10;
  background-color: rgba(0, 0, 0 0.4)
`;

const StyledTextVideoTitle = styled(Text)`
  color: white;
  font-family: 'Ubuntu';
  font-size: 1.75rem;
  font-weight: 600;
  max-width: 400px;
`;

const StyledViewYoutubeContainer = styled(View)`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 50vh;
`;

const StyledIFrame = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  border: 0px solid black;
`;