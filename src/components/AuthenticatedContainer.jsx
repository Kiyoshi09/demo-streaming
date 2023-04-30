import React from 'react';
import useNavigation from "../hooks/use-navigation";
import ProfilePage from '../pages/ProfilePage';
import VideoListPage from '../pages/VideoListPage';
import { useSelector } from 'react-redux';

const AuthenticatedContainer = ({ signOut, user }) => {
  const { currentPath } = useNavigation();
  const userprofile = useSelector((state) => {
    return state.userprofile;
  });

  return (
    <div>
      {
        currentPath === '/auth' ? <ProfilePage signOut={signOut} user={user} /> 
                                      : userprofile.profileName === "" ? <ProfilePage signOut={signOut} user={user} /> : <VideoListPage signOut={signOut} user={user} />
      }
    </div>
  );
}

export default AuthenticatedContainer;
