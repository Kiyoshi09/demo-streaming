import React from 'react';
import useNavigation from "../hooks/use-navigation";
import ProfilePage from '../pages/ProfilePage';
import VideoListPage from '../pages/VideoListPage';

const AuthenticatedContainer = ({ signOut, user }) => {
  const { currentPath } = useNavigation();

  console.log(`currentPath : ${currentPath}`);

  return (
    <div>
      {
        currentPath === '/auth' ? <ProfilePage signOut={signOut} user={user} /> : <VideoListPage signOut={signOut} user={user} />
      }
    </div>
  );
}

export default AuthenticatedContainer;
