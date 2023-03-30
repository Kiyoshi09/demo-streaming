// import { Auth } from 'aws-amplify';
import React from 'react';
import AuthComponent from '../components/AuthComponent';
import AuthenticatedContainer from '../components/AuthenticatedContainer';
import useNavigation from '../hooks/use-navigation';

const AuthenticatedPage = () => {
  const { email } = useNavigation();

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