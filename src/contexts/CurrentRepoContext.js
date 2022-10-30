import { createContext, useContext, useEffect, useState } from 'react';

const CurrentRepoContext = createContext({
  repo: {},
});

export const CurrentRepoContextProvider = ({ children }) => {
  const [repo, setRepo] = useState({});
  const value = { repo };

  useEffect(() => {
    setRepo({ owner: 'angular', repoName: 'angular-cli' });
  }, []);

  return <CurrentRepoContext.Provider value={value}>{children}</CurrentRepoContext.Provider>;
};

export const useCurrentRepoContext = () => {
  return useContext(CurrentRepoContext);
};
