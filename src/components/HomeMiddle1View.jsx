import React from 'react';
import styled from 'styled-components';
import { Flex, Image, Text, View } from '@aws-amplify/ui-react';

const HomeMiddle1View = (props) => {
  return (
    <StyledViewHomeMiddle1Container {...props}>
      <StyledFlexContainer
        direction={{base: "column", large: "row"}}
        display="relative"
        justifyContent="space-between"
        alignItems="center"
        gap={{base: "1rem", large: "3rem"}}>
          
        <StyledViewLabelContainer>
          <StyledTextHeading>Enjoy on your TV.</StyledTextHeading>
          <StyledTextBody>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</StyledTextBody>
        </StyledViewLabelContainer>

        <StyledViewImage>
          <Image alt="video frame" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
          <StyledViewVideoContainer>
            <video className="video" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay muted loop />
          </StyledViewVideoContainer>
        </StyledViewImage>

      </StyledFlexContainer>
    </StyledViewHomeMiddle1Container>
  );
}

export default HomeMiddle1View;

const StyledViewHomeMiddle1Container = styled(View)`

  @media screen and (max-width: 1279px) {
    padding-block: 6%;
  }

`;

const StyledFlexContainer = styled(Flex)`
  padding-inline: 15%;

  @media screen and (max-width: 1919px) {
    padding-inline: 10%;
  }

  @media screen and (max-width: 1535px) {
    padding-inline: 7%;
  }

  @media screen and (max-width: 1365px) {
    padding-inline: 5%;
  }

  @media screen and (max-width: 991px){
    padding-block: 5%;
  }
`;

const StyledViewLabelContainer = styled(View)`
  flex-basis: 50%;
  height: 100%;
`;

const StyledTextHeading = styled(Text)`
  font-size: 48px;
  font-family: 'Ubuntu';
  font-weight: 700;
  color: var(--amplify-colors-white);
  text-align: left;

  @media screen and (max-width: 991px) {
    font-size: 38px;
    text-align: center;
  }
`;

const StyledTextBody = styled(Text)`
  font-size: 28px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: left;

  @media screen and (max-width: 991px) {
    font-size: 22px;
    font-weight: 400;
    text-align: center;
  }
`;

const StyledViewImage = styled(View)`
  position: relative;
  color: #fff;

  > img {
    position: relative;
    z-index: 1;    
  }
`;

const StyledViewVideoContainer = styled(View)`
  position: absolute;
  /* top: 100px;
  left: 83px; */
  top: 90px;
  left: 78px;

  > video {
    @media screen and (max-width: 1279px){
      width: 90%;
    }

    @media screen and (max-width: 991px){
      width: 100%;
    }

    @media screen and (max-width: 479px){
      width: 90%;
    }
  }


    @media screen and (max-width: 1279px){
      top: 90px;
      left: 75px;
    }

    @media screen and (max-width: 479px){
      top: 50px;
      left: 45px;
    }
`;
