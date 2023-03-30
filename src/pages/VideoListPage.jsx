import React from "react";

const VideoListPage = ({ signOut, user }) => {
  return (
    <div>
      <h1>VideoListPage</h1>
      <button onClick={ signOut }>Sign Out</button>
    </div>
  )
};

export default VideoListPage;
