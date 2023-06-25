import { useState } from "react";
import GithubUser from "./GithubUser";

//has to be a valid username!!

function GithubUserList(){
    const [inputText, setInputText] = useState("");
    const [usernames, setUsernames] = useState([]);

    const handleInputChange =(e) => {
        setInputText(e.target.value);
    }

    const addText = () => {
        if (inputText !== "") {
            setUsernames((prevArray) => [...prevArray, inputText]);
            setInputText("");
        }
    };

    return(
        <div className="flex flex-col">
            <input type="text" value={inputText} onChange={handleInputChange} />
            <button onClick={addText} className="bg-gray-300">Add Username</button>
            <ul className="text-white">
                {usernames.map((text, index) => (
                    <li key={index}><GithubUser username={text} /></li>
                ))}
            </ul>
        </div>
    )
}
export default GithubUserList