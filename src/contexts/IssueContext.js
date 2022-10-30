import { useState } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { fetchIssue } from '../api/issue';

const IssueContext = createContext({
  useIssue: () => {},
});

export const IssueContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [issue, setIssue] = useState(null);

  const value = {
    issue,
    isLoading,
    useIssue: ({ owner, repo, number }) => {
      useEffect(() => {
        if (owner == null || repo == null) {
          return;
        }

        fetchIssue({ owner, repo, number }).then(x => {
          setIssue(x);
          setLoading(false);
        });
      }, [number, owner, repo]);
    },
  };

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
};

export const useIssueContext = () => {
  return useContext(IssueContext);
};
