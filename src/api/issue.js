import { get } from './http';

// @see https://docs.github.com/en/rest/issues/issues#list-repository-issues
export const fetchIssueList = async ({
  owner,
  repo,
  sort = 'comments',
  state = 'open',
  perPage = 30,
  page = 1,
}) => {
  const { data } = await get({
    url: `/repos/${owner}/${repo}/issues`,
    data: { state, sort, perPage, page },
  });

  return data;
};

// @see https://docs.github.com/en/rest/issues/issues#get-an-issue
export const fetchIssue = async ({ owner, repo, number }) => {
  const { data } = await get({
    url: `/repos/${owner}/${repo}/issues/${number}`,
  });

  return data;
};
