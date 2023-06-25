import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGithubUser(username) {
  const shouldFetch = !!username;

  const { data, error, mutate } = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher);

  function handleRefreshUsers() {
    mutate();
  }

  return {
    data,
    error,
    isLoading: !data && !error,
    onRefresh: handleRefreshUsers,
  };
}

export default useGithubUser;