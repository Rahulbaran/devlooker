import { useState } from "react";

import SearchForm from "./components/SearchForm";
import DevPortfolio from "./components/DevPortfolio";

import useFetch from "./hooks/useFetch";

export default function App() {
  const [username, setUsername] = useState("rahulbaran");
  const [user, setUser] = useState("");

  const userInfo = useFetch(username);

  const handleUser = e => setUser(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setUsername(user);
    setUser("");
  };

  return (
    <main className="app-wrapper">
      <header>
        <h1>devlooker</h1>
      </header>

      <SearchForm
        user={user}
        handleUser={handleUser}
        handleSubmit={handleSubmit}
      />

      {userInfo.status === "success" ? (
        <DevPortfolio userInfo={userInfo.response} />
      ) : (
        <div>
          <h2>User not found</h2>
        </div>
      )}
    </main>
  );
}
