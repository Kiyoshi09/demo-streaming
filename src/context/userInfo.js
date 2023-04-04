import { createContext, useState } from 'react';

const UserInfoContext = createContext();

const UserInfoProvider = ({children}) => {
  const [ email, setEmail ] = useState('');
  const [ profileName, setProfileName ] = useState('');
  const [ isKids, setIsKids ] = useState(false);

  const setUserInfo = (e, p, k) => {
    if(e) {
      setEmail(e);
    }

    if(p) {
      setProfileName(p);
    }

    if(k) {
      setIsKids(k);
    }

  }

  return(
    <UserInfoContext.Provider value={{ email, profileName, isKids, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export { UserInfoProvider };
export default UserInfoContext;
