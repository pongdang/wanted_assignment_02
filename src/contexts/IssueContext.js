import { useState } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { fetchIssue } from '../api/issue';

const IssueContext = createContext({
  useIssue: () => {},
});

export const IssueContextProvider = ({ children }) => {
  const value = {
    useIssue: ({ owner, repo, id }) => {
      const [isLoading, setLoading] = useState(true);
      const [issue, setIssue] = useState(null);

      useEffect(() => {
        fetchIssue({ owner, repo, id }).then(x => {
          setIssue(x);
          setLoading(false);
        });
      }, [id, owner, repo]);

      return { issue, isLoading };
    },
  };

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
};

export const useIssueContext = () => {
  return useContext(IssueContext);
};
