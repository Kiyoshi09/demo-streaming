import React from "react";
import useUserInfo from "../hooks/use-userinfo";

const VideoListPage = ({ signOut, user }) => {
  const { profileName, isKids } = useUserInfo();

  const handleSignOut = () => {
    window.history.pushState({}, "", '/auth');
    signOut();
  }

  return (
    <div>
      <h1>VideoListPage</h1>
      <h3>{profileName}</h3>
      <h3>{isKids.toString()}</h3>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
};

export default VideoListPage;
