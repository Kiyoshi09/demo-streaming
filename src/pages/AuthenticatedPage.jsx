import React from 'react';
import AuthComponent from '../components/AuthComponent';
import AuthenticatedContainer from '../components/AuthenticatedContainer';
import { useSelector } from 'react-redux';

const AuthenticatedPage = () => {
  const userprofile = useSelector((state) => {
    return state.userprofile;
  });

  return (
    <AuthComponent initialState={userprofile.email ? "signUp" : "signIn"} email={userprofile.email || ""}>
      {
        ({ signOut, user }) => (
            <AuthenticatedContainer signOut={signOut} user={user} />
        ) 
      }
    </AuthComponent>
  );

}

export default AuthenticatedPage;