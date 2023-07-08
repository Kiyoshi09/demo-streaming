import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Flex, View, Image, Link, Text, Menu, MenuItem } from "@aws-amplify/ui-react";
import { FiSearch } from "react-icons/fi";
import { useSelector } from 'react-redux';

import SearchBoxComponent2 from "./SearchBoxComponent2";
import { AccountMenuComponent } from "./AccountMenuComponent";

const VideoListHeaderComponent = ({ isSearch, searchWords, onClickMenu, refSearchIcon, onSignout }) => {
  const [ isHeaderFixed, setIsHeaderFixed ] = useState(false);

  const userprofile = useSelector((state) => {
    return state.userprofile;
  });

const handleScroll = () => {
    //console.log(window.scrollY);
    if(window.scrollY >= 20) {
      setIsHeaderFixed(true);
    }
    else {
      setIsHeaderFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])


  return (
    <>
      <Flex 
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        height='68px'
        // marginTop='10px'
        marginRight={{base: "5px"}} 
        style={ isHeaderFixed ? 
                  { position: "fixed", 
                    top: 0, 
                    left: 0, 
                    width: "100%", 
                    zIndex: 999, 
                    backgroundColor: "rgba(0, 0, 0, 0.7)" 
                  } : {}}
      >
          <StyledHeaderItem1>
            <Image alt="tealium Logo" src="https://kiyotaro.cloud/images/2021_Tealium_logo.png" width='70%'/>
          </StyledHeaderItem1>
          <StyledHeaderItem2>
            <Flex
              direction='row'
              justifyContent='space-evenly'>
              <StyledLinkMenu onClick={(event) => onClickMenu(event, 'home')}>Home</StyledLinkMenu>
              <StyledLinkMenu onClick={(event) => onClickMenu(event, 'movie')}>Movies</StyledLinkMenu>
              <StyledLinkMenu onClick={(event) => onClickMenu(event, 'tv')}>TV Shows</StyledLinkMenu>
              <StyledLinkMenu onClick={(event) => onClickMenu(event, 'new')}>New & Popular</StyledLinkMenu>
              <StyledLinkMenu onClick={(event) => onClickMenu(event, 'mylist')}>My List</StyledLinkMenu>
            </Flex>
          </StyledHeaderItem2>
          <StyledHeaderItem3>
            <Menu menuAlign="start" size="small">
              <MenuItem onClick={(event) => onClickMenu(event, 'home')}>Home</MenuItem>
              <MenuItem onClick={(event) => onClickMenu(event, 'movie')}>Movies</MenuItem>
              <MenuItem onClick={(event) => onClickMenu(event, 'tv')}>TV Shows</MenuItem>
              <MenuItem onClick={(event) => onClickMenu(event, 'new')}>New & Popular</MenuItem>
              <MenuItem onClick={(event) => onClickMenu(event, 'mylist')}>My List</MenuItem>
            </Menu>
          </StyledHeaderItem3>
          <StyledHeaderItem4>
            <StyledViewSearchArea ref={refSearchIcon}>
              {
                isSearch === false ? <StyledIconSearch /> : <SearchBoxComponent2 searchWords={searchWords} />
              }
            </StyledViewSearchArea>
          </StyledHeaderItem4>
          <StyledHeaderItem5>
            <StyledFlexHeaderRight
              direction='row'
              justifyContent='flex-end'
              alignItems='center'>
              <StyledText as="p" color='#fff'>{userprofile.profileName}</StyledText>
              <StyledViewAccountImageContainer>
                <AccountMenuComponent onSignout={onSignout}>
                  {
                    userprofile.isKids === true ? <Image alt='profile' src='https://www.kiyotaro.cloud/images/tealium_beast.png' /> : <Image alt='profile' src='https://www.kiyotaro.cloud/images/tealium-logo-small.jpeg' />
                  }
                </AccountMenuComponent>
              </StyledViewAccountImageContainer>
            </StyledFlexHeaderRight>
          </StyledHeaderItem5>
      </Flex>
    </>
  );
}

export default VideoListHeaderComponent;

const StyledViewFlexContainer = styled(Flex)`
  /* display: relative;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 1); */
`;

const StyledHeaderItem1 = styled(View)`
  color: var(--amplify-colors-white);
  width: 300px;
  text-align: right;
  /* border: solid 1px var(--amplify-colors-white); */

  @media screen and (max-width: 1344px) {
    display: none;
  } 

  img {
    vertical-align: middle;
  }
`;

const StyledHeaderItem2 = styled(View)`
  color: var(--amplify-colors-white);
  width: 700px;
  /* border: solid 1px var(--amplify-colors-white); */

  @media screen and (max-width: 1280px) {
    margin-left: 30px;
  } 

  @media screen and (max-width: 1056px) {
    display: none;
  } 
`;

const StyledHeaderItem3 = styled(View)`
  color: var(--amplify-colors-white);
  width: 300px;
  /* border: solid 1px var(--amplify-colors-white); */

  button {
    display: none;

    @media screen and (max-width: 1056px) {
      background-color: #fff;
      display: block;
    } 
  }

  @media screen and (max-width: 1280px) {
    width: 70px;
  }

  @media screen and (max-width: 1056px) {
    padding-inline: 30px 12px;
  } 

  @media screen and (max-width: 768px) {
    padding-inline: 20px 12px;
  } 
`;

const StyledHeaderItem4 = styled(View)`
  position: relative;
  color: var(--amplify-colors-white);
  width: 400px;
  /* border: solid 1px var(--amplify-colors-white); */

  @media screen and (max-width: 1056px) {
    width: 700px;
  } 

  @media screen and (max-width: 440px) {
    display: none;
  } 
`;

const StyledViewSearchArea = styled(View)`
  position: absolute;
  top: -0.75rem;
  right: 0;
`;

const StyledIconSearch = styled(FiSearch)`
  font-size: 1.5rem;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }
`;

const StyledHeaderItem5 = styled(View)`
  color: var(--amplify-colors-white);
  width: 300px;
  /* border: solid 1px var(--amplify-colors-white); */

  @media screen and (max-width: 1056px) {
    width: 100px;
  } 
`;

const StyledLinkMenu = styled(Link)`
  font-family: 'Ubuntu';
  font-weight: 600;

  @media screen and (max-width: 1536px) {
    font-size: 16px;
    font-weight: 400;
  }
`;

const StyledFlexHeaderRight = styled(Flex)`
  padding-inline: 10px 50px;

  @media screen and (max-width: 1344px) {
    padding-inline: 10px 30px;
  } 

  @media screen and (max-width: 768px) {
      padding-inline: 20px 12px;
    } 
`;


const StyledText = styled(Text)`
  font-family: 'Ubuntu';
  inline-size: 150px;
  text-align: right;

  @media screen and (max-width: 1056px) {
    display: none;
  } 
`;

const StyledViewAccountImageContainer = styled(View)`
  width: 50px;

  img {
    vertical-align: middle;
  }

  button {
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 1.0);
    }

    &:focus {
      background-color: rgba(0, 0, 0, 1.0);
    }
  }
`;