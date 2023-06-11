
import React from 'react';
import styled from 'styled-components';
import { View, Loader, Flex, Image, Text, Button } from '@aws-amplify/ui-react';
import { ImPlay2, ImStop } from 'react-icons/im';
import Carousel from "nuka-carousel";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import useToggle from '../hooks/use-toggle';
import Add2ListButton from './Add2ListButton';
import LikeButton from './LikeButton';
import VideoTitleVideoYouTube from './VideoTitleVideoYouTube';

const VideoTitleVideo = ({apiConfig, getUpcomingMovies, trailerQuery}) => {
  const { data, error, isFetching } = getUpcomingMovies();
  const { state: isPlaying, toggle: toggleIsPlaying } = useToggle(false); 

  const handleOnPlay = () => {
    toggleIsPlaying();
  }

  let titleVideo;

  if (isFetching) {
    //titleVideo = <Loader size='large' variation='linear' />;
    titleVideo = <StyledLoaderContainer><Loader size='large' variation='linear' /></StyledLoaderContainer>;
  }
  else if (error) {
    titleVideo = <StyledTextErrorMsg as='p'>Error Loading Contents</StyledTextErrorMsg>;
  }
  else {
    const imgBaseUrl = apiConfig.images.secure_base_url;

    let i = 0;
    const results = data.results.filter((res) => {
      if(res.overview.length >= 400 && i < 5) {
        i++;
        return true;
      }
      return false;
    })

    const prevButton = <GoTriangleLeft size={40} color='#ccc'/>
    const nextButton = <StyledGoTriangleRight size={40} color='#ccc'/>
    const css4Button = {
      width: '30px',
      height: '70px',
      padding: '5px 5px',
      backgroundColor: 'transparent',
    }

    const defaultControlConfig = {
      nextButtonStyle: css4Button,
      nextButtonText: nextButton,
      prevButtonStyle: css4Button,
      prevButtonText: prevButton,
    }

    titleVideo = <Carousel 
                    defaultControlsConfig={defaultControlConfig} 
                    autoplay={!isPlaying} 
                    autoplayInterval={8000} 
                    wrapAround={true}>
      {
        results.map((video) => {
          const videoId = video.id;
          const title = video.title;
          const overview = video.overview.length > 500 ? video.overview.slice(0, 500) + "..." : video.overview;
          const imagePosterPath = imgBaseUrl + 'original' + video.backdrop_path;

          console.log(video);

          return (
            <StyledViewContainer key={videoId}>
              <StyledFlex1Container direction='row' alignItems='flex-start'>
                <StyledFlex2Container direction='column' justifyContent='center'>
                  <StyledViewDummyBlock></StyledViewDummyBlock>
                  <StyledTextVideoTitle>{title}</StyledTextVideoTitle>
                  <StyledViewOverview>{overview}</StyledViewOverview>
                  <StyledFlexButtonContainer direction='row'>
                    <StyledButton onClick={handleOnPlay}>
                      {
                        isPlaying === false ? <><ImPlay2 size={25}/><StyledSpan>Play</StyledSpan></> 
                                                    : <><ImStop size={25}/><StyledSpan>Stop</StyledSpan></>
                      }
                    </StyledButton>
                    <Add2ListButton videoId={videoId} contentsType='movie' />
                    <LikeButton videoId={videoId} contentsType='movie' />
                  </StyledFlexButtonContainer>
                </StyledFlex2Container>
                <StyledViewImageVideoContainer>
                {
                  isPlaying === false ? <StyledImageVideo alt="titleVideo" src={imagePosterPath} />
                                      : <VideoTitleVideoYouTube videoId={videoId} trailerQuery={trailerQuery} />
                }
                </StyledViewImageVideoContainer>
              </StyledFlex1Container>
            </StyledViewContainer>
          );
        })
      }
    </Carousel>
  }

  return (
    <StyledViewVideoTitleMain>
      {titleVideo}
    </StyledViewVideoTitleMain>
  );
}

export default VideoTitleVideo;

const StyledLoaderContainer = styled(View)`
  width: 100%;
  height: 300px;
  padding-inline: 200px 200px;
  padding-block: 150px 150px;
`;

const StyledViewVideoTitleMain = styled(View)`
  @media screen and (max-width: 1279px){
    display: none;
  }
`;

const StyledViewContainer = styled(View)`
  position: relative;
  width: 100%;
  height: 550px;
  /* background-color: gray; */
`;

const StyledTextErrorMsg = styled(Text)`
  font-size: 28px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: center;
`;

const StyledFlex1Container = styled(Flex)`
  margin-inline: 50px 50px;
`;

const StyledFlex2Container = styled(Flex)`
  margin-inline: 100px 20px;
  width: 100%;

  @media screen and (max-width: 1280px){
    width: 90%;
    margin-inline: 0px 20px;
  }
`;

const StyledViewDummyBlock = styled(View)`
  display: block;
  height: 100px;
  width: 100%;
  /* background-color: red; */

  /* @media screen and (max-width: 1280px){
    height: 130px;
  } */
`;

const StyledTextVideoTitle = styled(Text)`
  color: white;
  font-family: 'Ubuntu';
  font-size: 1.75rem;
  font-weight: 600;
`;

const StyledViewOverview = styled(View)`
  color: white;
  font-family: 'Ubuntu';
  text-overflow: ellipsis;
`;

const StyledFlexButtonContainer = styled(Flex)`
  margin-top: 50px;
`;

const StyledButton = styled(Button)`
  width: 120px;
  color: black;
  background-color: white;
  font-family: 'Ubuntu';
`;

const StyledViewImageVideoContainer = styled(View)`
  position: relative;
  width: 100%;
  margin-right: 50px;

  /* &:after {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 100px;
    left: 0;
    width: 800px;
    height: 400px;
  } */
`;

const StyledImageVideo = styled(Image)`
  object-fit: cover;
  position: relative;
  top: 100px;
  width: 800px;
  height: 400px;
`;

const StyledSpan = styled.span`
  padding-inline: 8px 8px;
`;

const StyledGoTriangleRight = styled(GoTriangleRight)`
  padding-right: 20px;
`;
