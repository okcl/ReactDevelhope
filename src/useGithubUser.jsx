import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json)

function useGithubUser(username){
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return { 
        users: data,
        error,
        isLoading: !data && !error 
    }
}

export default useGithubUser