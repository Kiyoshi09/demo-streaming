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

  const clearUserInfo = () => {
    setEmail('');
    setProfileName('');
    setIsKids(false);
  }

  return(
    <UserInfoContext.Provider value={{ email, profileName, isKids, setUserInfo, clearUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export { UserInfoProvider };
export default UserInfoContext;
