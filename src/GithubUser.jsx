import useGithubUser from "./useGithubUser"

function GithubUser({ username }){
    const { data, error, isLoading, onRefresh } = useGithubUser(username)
    return(
        <div className="text-white">
            <button onClick={onRefresh}>Refresh</button>
            {isLoading && <h1>Loading..</h1>}
            {error && <h1>An error accoured</h1>}
            {data && 
                <div className="flex flex-col items-center">
                    <img src={data.avatar_url} className="w-20 h-20 rounded-full" alt="user_avatar"/>
                    <h1>Name of the user is: {data.name}</h1>
                </div>
            }
        </div>
    )
}

export default GithubUser