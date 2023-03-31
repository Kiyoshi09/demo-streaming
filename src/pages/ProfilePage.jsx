import React from 'react';
import useNavigation from '../hooks/use-navigation';

const ProfilePage = ({ signOut, user }) => {

  const { navigate } = useNavigation();

  const handleClick = (event, to) => {
    if(event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    navigate({ to, email: "" });
  }

  console.log(JSON.stringify(user));

  return (
      <div>
        <h1>ProfilePage ({user.attributes.email}) </h1>
        <button onClick={ signOut }>Sign Out</button>
        <button onClick={ (event) => handleClick(event, '/auth/videolist') }>Go To VideList</button>
      </div>
  );
}

export default ProfilePage;
