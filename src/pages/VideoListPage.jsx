import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Loader, Text, View } from '@aws-amplify/ui-react';

import useNavigation from "../hooks/use-navigation";
import { clearUserprofile } from '../redux/userprofileSlice';
import VideoListHeaderComponent from "../components/VideoListHeaderComponent";
import VideoListHomeComponent from "../components/VideoListHomeComponent";
import VideoListMovieComponent from "../components/VideoListMovieComponent";
import VideoListTvComponent from "../components/VideoListTvComponent";
import VideoListPopularComponent from "../components/VideoListPopularComponent";
import VideoListMyListComponent from "../components/VideoListMyListComponent";
import { useGetConfigurationQuery } from "../redux/store/store";
import HomeFooterView from "../components/HomeFooterView";

const VideoListPage = ({ signOut, user }) => {
  const [ isSearch, setIsSearch ] = useState(false);
  const refSearchIcon = useRef(null);
  const { currentPath, navigate } = useNavigation();
  const dispatch = useDispatch();
  const { data, error, isFetching } = useGetConfigurationQuery();

  // Component Mount/Unmount
  useEffect(() => {
    const bodyElm = document.getElementsByTagName('body')[0];
    bodyElm.style.backgroundColor = 'black';

    return () => { 
      bodyElm.style.backgroundColor = 'white' ;
    }
  }, [])


  useEffect(() => {
    const el = refSearchIcon.current;
    if (!el) return;

    const handleClickOutsideSearchIcon = (e) => {
      if (!el?.contains(e.target)) {
        // Outside
        setIsSearch(false);
      }
      else {
        // Inside
        setIsSearch(true);
      }
    }

    document.addEventListener('click', handleClickOutsideSearchIcon);

    return () => {
      document.removeEventListener('click', handleClickOutsideSearchIcon);
    }
  }, [refSearchIcon])

  const handleSignOut = () => {
    dispatch(clearUserprofile());

    setTimeout(() => {
      navigate({ to: '/auth' });
    });

    signOut();
  }

  const handleMenuClick = (event, menu) => {
    const to = `/auth/videolist/${menu}`;
    navigate({to});
  }

  let contents;

  if(isFetching) {
    contents = <StyledViewLoaderContainer><Loader size='large' variation='linear' /></StyledViewLoaderContainer>;
  }
  else if(error) {
    contents = <StyledTextErrorMsg as='p'>Error Loading Contents</StyledTextErrorMsg>;
  }
  else {
    contents = <>
      <VideoListHeaderComponent 
          isSearch={isSearch} 
          onClickMenu={handleMenuClick} 
          refSearchIcon={refSearchIcon} 
          onSignout={handleSignOut}/> 

        <div style={{ width: "100vh", height: "20px" }}></div>

        {
          currentPath === '/auth/videolist' && <VideoListHomeComponent apiConfig={data}/>
        }
        {
          currentPath === '/auth/videolist/home' && <VideoListHomeComponent apiConfig={data}/>
        }
        {
          currentPath === '/auth/videolist/movie' && <VideoListMovieComponent apiConfig={data}/>
        }
        {
          currentPath === '/auth/videolist/tv' && <VideoListTvComponent apiConfig={data}/>
        }
        {
          currentPath === '/auth/videolist/new' && <VideoListPopularComponent apiConfig={data}/>
        }
        {
          currentPath === '/auth/videolist/mylist' && <VideoListMyListComponent apiConfig={data}/>
        }
        <HomeFooterView 
            height={{ base: "90vh", small: "70vh", medium: "60vh", xl: "50vh", xxl: "50vh"}}
            width="100%" 
            backgroundColor="var(--amplify-colors-black)"
            border="1px solid var(--amplify-colors-black)" />
    </>;

  }

  return (
    <>
      {contents}
    </>
  );
};

export default VideoListPage;

const StyledViewLoaderContainer = styled(View)`
  width: 100%;
  height: 100vh;
  padding: 300px 50px 100px 50px;
`;

const StyledTextErrorMsg = styled(Text)`
  font-size: 28px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: center;
`;