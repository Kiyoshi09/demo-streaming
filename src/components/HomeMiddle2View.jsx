import React from 'react';
import styled from 'styled-components';
import { Flex, Image, Text, View } from '@aws-amplify/ui-react';

const HomeMiddle2View = (props) => {
  return (
    <StyledViewHomeMiddle2Container {...props}>
      <StyledFlexContainer
        direction={{base: "column-reverse", large: "row"}}
        display="relative"
        justifyContent="space-between"
        alignItems="center"
        gap={{base: "1rem", large: "3rem"}}>

        <StyledViewImage>
          <Image alt="video frame" src="https://occ-0-3188-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" />
          {/* <StyledViewVideoContainer>
            <video className="video" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay muted loop />
          </StyledViewVideoContainer> */}
        </StyledViewImage>

        <StyledViewLabelContainer>
          <StyledTextHeading>Create profiles for kids.</StyledTextHeading>
          <StyledTextBody>Send kids on adventures with their favorite characters in a space made just for them—free with your membership..</StyledTextBody>
        </StyledViewLabelContainer>

        </StyledFlexContainer>
    </StyledViewHomeMiddle2Container>
  );
}

export default HomeMiddle2View;

const StyledViewHomeMiddle2Container = styled(View)`
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
  padding-block-start: 1.3rem;

  @media screen and (max-width: 991px) {
    font-size: 22px;
    font-weight: 400;
    text-align: center;
  }
`;

const StyledViewImage = styled(View)`
  position: relative;
  color: #fff;
  padding-block-start: 40px;

  > img {
    position: relative;
    z-index: 1;    
  }
`;
