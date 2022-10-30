import { useState } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { fetchIssueList } from '../api/issue';

const IssueListContext = createContext({
  useIssueList: () => {},
});

export const IssueListContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [issueList, setIssueList] = useState(null);

  const value = {
    isLoading,
    issueList,
    useIssueList: ({ owner, repo, perPage, page }) => {
      useEffect(() => {
        if (owner == null || repo == null) {
          return;
        }

        fetchIssueList({ owner, repo, perPage, page }).then(x => {
          setIssueList([...(issueList ?? []), ...x]);
          setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [owner, page, perPage, repo]);
    },
  };

  return <IssueListContext.Provider value={value}>{children}</IssueListContext.Provider>;
};

export const useIssueListContext = () => {
  return useContext(IssueListContext);
};
