import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css';
import ShowGithubUser from './ShowGithubUser';
import DisplayLanguage from './DisplayLanguage';
import Counter from './Counter';
import LoginForm from './LoginForm';
import GithubUserList from './GithubUserList';


function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-center">
      <div className="bg-gray-400 hover:bg-gray-600">
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/language">Language</Link> | <Link to="/login">Login Form</Link> | <Link to="/asdasfasd">Invalid Page</Link> | <Link to="/users">Users</Link>
      </div>

      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/language" element={<DisplayLanguage />} />
        <Route path="/login" element={<LoginForm />} />

        <Route path="users" element={<GithubUserList />}>
          <Route index element={<div>Add a user and select it</div>} />
          <Route path=":username" element={<div><ShowGithubUser /></div>} />
        </Route>

        <Route
          path="*"
          element={
            <div>
              <p>Not Found</p>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App;
