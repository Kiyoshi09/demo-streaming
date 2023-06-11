import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Flex, Image, Text, View } from '@aws-amplify/ui-react';
import GetStartedComp from './GetStartedComp';
import useNavigation from '../hooks/use-navigation';
import { Auth } from 'aws-amplify';

const HomeTopView = (props) => {
  const { navigate } = useNavigation();

  const isLoggedIn = useCallback(async () => {
    const currentAuthUser = await Auth.currentAuthenticatedUser();
    const session = await Auth.userSession(currentAuthUser);

    if(session?.isValid()) {
      navigate({ to: '/auth', email: currentAuthUser.email });
    }
  }, []);

  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn])

  const handleClickSignIn = (event, to) => {
    if(event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    navigate({ to, email: "" });
  }

  return (
    <StyledViewHomeTopContainer {...props}>
      <Image 
        alt="top view image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/c86afdf7-1b44-4911-80fd-f97d0130fcd8/US-en-20221010-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        objectFit="cover"
        height="100%"
        width="100%" />

      <StyledViewGradient
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        backgroundImage="linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.9) 100%)" />

      <StyledViewHeader
        position="absolute"
        top="0"
        left="0"
        height="5.375rem"
        width="100%">

        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center">

          <View
            position="relative"
            top="20px"
            left={{ base: "10px", small: "30px", medium: "50px", large: "70px", xl: "120px"}}>

            <Image 
              alt='tealium logo'
              src='https://kiyotaro.cloud/images/2021_Tealium_logo.png'
              width={{ base: "170px", medium: "250px" }}
              height={{ base: "80px", medium: "100px" }}/>
          </View>

          <View
            position="relative"
            top="20px"
            right={{ base: "25px", small: "60px", medium: "80px", large: "120px", xl: "200px"}}>

            <StyledButtonSignIn variation='primary' onClick={(event) => handleClickSignIn(event, '/auth')} >Sign In</StyledButtonSignIn>

          </View>
        </Flex>
      </StyledViewHeader>

      <StyledViewBody
        height="80%"
        width="100%"
        // paddingBlock={{ base: "20% 10%", meidum: "20% 10%" , large: "12% 10%", xl: "8% 8%" }}
        >

          <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="center">

            <View alignItems="center" >
                <StyledTextHeading1>Unlimited movies, TV shows, and anime.</StyledTextHeading1>
            </View>

            <View alignItems="center">
              <StyledTextHeading3>Watch anywhere. Cancel anytime.</StyledTextHeading3>
            </View>

            <View alignItems="center">
              <StyledTextHeading5>Ready to watch? Enter your email to create or restart your membership.</StyledTextHeading5>
              <GetStartedComp />
            </View>

          </Flex>
      </StyledViewBody>
    </StyledViewHomeTopContainer>
  );
}

export default HomeTopView;

const StyledViewHomeTopContainer = styled(View)`
`;

const StyledViewGradient = styled(View)`
`;

const StyledViewHeader = styled(View)`
`;

const StyledButtonSignIn = styled(Button)`
  height: 48px;
  width: 120px;

  @media screen and (max-width: 767px) {
    height: 40px;
    width: 110px;
  }
`;

const StyledTextHeading1 = styled(Text)`
  font-size: 48px;
  font-family: 'Ubuntu';
  font-weight: 700;
  color: var(--amplify-colors-white);
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 38px;
  }
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const StyledTextHeading3 = styled(Text)`
  font-size: 36px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledTextHeading5 = styled(Text)`
  font-size: 24px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledViewBody = styled(View)`
  position: absolute;
  top: 200px;
  left: 0;

  @media screen and (max-width: 1280px) {
    position: absolute;
    top: 150px;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 200px;
    left: 0;
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    top: 150px;
    left: 0;
  }
`;
