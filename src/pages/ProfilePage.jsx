import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex, View, Text, Image, Button } from '@aws-amplify/ui-react';

import { SaveProfileApi } from '../apis/SaveProfileApi';
import { QueryProfileByEmailApi } from '../apis/QueryProfileByEmailApi';

import useNavigation from '../hooks/use-navigation';
import useUserInfo from '../hooks/use-userinfo';
import useToggle from '../hooks/use-toggle';
import AddProfileComponent from '../components/AddProfileComponent';

const ProfilePage = ({ signOut, user }) => {

  const { navigate } = useNavigation();
  const { setUserInfo } = useUserInfo();
  const { state: screenState, toggle: toggleScreen } = useToggle();

  const [ profiles, setProfiles ] = useState([]);

  useEffect(() => {
    const bodyElm = document.getElementsByTagName('body')[0];
    bodyElm.style.backgroundColor = 'black';

    return () => { bodyElm.style.backgroundColor = 'white' }
  }, [])

  const profileData = useCallback(async() => {
    const email = user.attributes.email;
    let a = await QueryProfileByEmailApi(email);

    if (Object.keys(a).length === 0) {
      await SaveProfileApi({
        email,
        name: user.attributes.email.split('@')[0],
        isKids: false
      });

      a = await QueryProfileByEmailApi(email);
    }

    setProfiles(a);
  }, [user.attributes.email])

  useEffect(() => {
    profileData();
  }, [profileData]);

  const handleClick = (event, to, name, isKids) => {
    if(event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    setUserInfo(user.attributes.email, name, isKids);
    navigate({ to });
  }

  const handleClickAddProfile = (event, profileName, state) => {
    //toggle();
    toggleScreen();

    (async() => {
      const email = user.attributes.email;

      await SaveProfileApi({
        email,
        name: profileName,
        isKids: state
      });

      const a = await QueryProfileByEmailApi(email);
      setProfiles(a);
    })();
  }

  const handleClickSwitchScreen = () => {
    //toggle();
    toggleScreen();
  }

  return (
      <StyledViewContainer>
        {
          screenState === true && 
          <Flex direction="column" alignItems="center">
              <StyledTextHeading0>Who's watching ?</StyledTextHeading0>
              <StyledFlexProfileContainer
                direction={{ base: 'column', small: 'row'}}
                wrap={{ base: 'wrap', large: 'nowrap' }}
                justifyContent="center"
                alignItems="center">

                  {
                    profiles.map((profile) => {
                      return (
                        <StyledViewProfile key={profile.id} onClick={(event) => handleClick(event, '/auth/videolist', profile.name, profile.isKids)}>
                          {
                            profile.isKids === true ? <Image alt='profile' src='https://www.kiyotaro.cloud/images/tealium_beast.png' width='100%' /> 
                                                                  : <Image alt='profile' src='https://www.kiyotaro.cloud/images/tealium-logo-small.jpeg' width='100%' />
                          }
                          <StyledTextHeading6 width='100%'>{profile.name}</StyledTextHeading6>
                        </StyledViewProfile>
                      )
                    })
                  }

                  <StyledViewProfileAdd onClick={handleClickSwitchScreen}>
                    <Image alt='add profile' src='https://www.kiyotaro.cloud/images/arrow.png' width='100%' />
                  </StyledViewProfileAdd>
              </StyledFlexProfileContainer>
              <Button size={{ base: 'small', medium: 'medium', large: 'large'}} variation='primary' onClick={ signOut }> Remove Profile </Button>
          </Flex>
        }
        {
          screenState === false &&
          <AddProfileComponent handleClickAddProfile={handleClickAddProfile} handleClickSwitchScreen={handleClickSwitchScreen} />
        }
        
      </StyledViewContainer>
  );
}

export default ProfilePage;

const StyledViewContainer = styled(View)`
  width: 100%;
  padding-block-start: 300px;
  background-color: var(--amplify-colors-black);

  @media screen and (max-width: 992px) {
    padding-block-start: 100px;
  }
`;

const StyledTextHeading0 = styled(Text)`
  font-size: 64px;
  font-family: 'Ubuntu';
  font-weight: 700;
  color: var(--amplify-colors-white);
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

const StyledFlexProfileContainer = styled(Flex)`
  margin-block: 30px 30px;
  margin-inline: 30% 30%;
`

const StyledTextHeading6 = styled(Text)`
  font-size: 18px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledViewProfile = styled(View)`
  width: 200px;
  margin: 0 30px;

  img {
    &:hover {
      cursor: pointer;
      border: solid 2px var(--amplify-colors-brand-primary-100);
    }
  }

  @media screen and (max-width: 1280px) {
    width: 150px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

const StyledViewProfileAdd = styled(View)`
  width: 200px;
  margin: 0 30px;

  img {
    &:hover {
      cursor: pointer;
      background-color: white;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 1280px) {
    width: 150px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;
