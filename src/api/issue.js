import { get } from './http';

export const fetchIssueList = async ({ owner, repo, sort = 'comments', state = 'open' }) => {
  const { data } = await get({
    url: `/repos/${owner}/${repo}/issues`,
    data: { state, sort },
  });

  return data;
};

export const fetchIssue = async ({ owner, repo, id }) => {
  const { data } = await get({
    url: `/repos/${owner}/${repo}/issues/${id}`,
  });

  return data;
};
