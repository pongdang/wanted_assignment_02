import { useCurrentRepoContext } from '../contexts/CurrentRepoContext';

export function Header() {
  const { repo } = useCurrentRepoContext();

  return (
    <header>
      <h1>{`${repo.repoName} | ${repo.owner}`}</h1>
    </header>
  );
}
