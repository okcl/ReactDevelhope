import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((response) => response.json())

function useGithubUser(username){
    const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher)

     function handleRefreshUsers() {
        mutate()
     }

    return { 
        data,
        error,
        isLoading: !data && !error,
        onRefresh: handleRefreshUsers
    }

}

export default useGithubUser