import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [email, setEmail] = useState('');

    useEffect(() => {
      const handler = () => {
        setCurrentPath(window.location.pathname);
      };

      window.addEventListener("popstate", handler);

      return () => {
        window.removeEventListener("popstate", handler);
      };
    }, []);

    const navigate = (urlInfo) => {
      setEmail(urlInfo.email);

      window.history.pushState({}, "", urlInfo.to);
      setCurrentPath(urlInfo.to);
    };


    return (
      <NavigationContext.Provider value={{ currentPath, navigate, email }}>
        {children}
      </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;