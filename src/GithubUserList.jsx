import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function GithubUserList() {
  const [inputText, setInputText] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addText = () => {
    if (inputText !== "") {
      setUsernames((prevArray) => [...prevArray, inputText]);
      setInputText("");
    }
  };

  return (
    <div className="flex flex-col text-black">
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={addText} className="bg-gray-300 hover:bg-gray-400">
        Add Username
      </button>
      <ul className="text-white">
        {usernames.map((text, index) => (
          <li key={index} className="bg-gray-400 hover:bg-gray-600">
            <Link to={`/users/${text}`}>{text}</Link>
          </li>
        ))}
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default GithubUserList;
