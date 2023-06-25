import useGithubUser from "./useGithubUser"

function GithubUser({ username }){
    const { data, error, isLoading } = useGithubUser(username)
    return(
        <div className="text-white">
            {isLoading && <h1>Loading..</h1>}
            {error && <h1>An error accoured</h1>}
            {data && <h1>Name of the user is: {data.name}</h1>}
        </div>
    )
}

export default GithubUser