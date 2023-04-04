import React from 'react';
import AuthComponent from '../components/AuthComponent';
import AuthenticatedContainer from '../components/AuthenticatedContainer';
import useUserInfo from '../hooks/use-userinfo';

const AuthenticatedPage = () => {
  const { email } = useUserInfo();

  return (
    <AuthComponent initialState={email ? "signUp" : "signIn"} email={email || ""}>
      {
        ({ signOut, user }) => (
            <AuthenticatedContainer signOut={signOut} user={user} />
        ) 
      }
    </AuthComponent>
  );

}

export default AuthenticatedPage;