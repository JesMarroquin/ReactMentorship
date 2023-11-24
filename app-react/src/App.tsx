import { Typography } from "@mui/material";
import "./App.css";
import { users } from "./users";
import UserList from "./components/UserList";
import { useEffect, useState } from "react";
import User from "./components/User";

function App() {
  // useState
  const [usersList, setUsersList] = useState<User[]>([]);
  const isVisible = true;

  useEffect(() => setUsersList(users), []);
  return (
    <>
      {isVisible ? (
        <UserList users={usersList} />
      ) : (
        <Typography variant="h1">Not found...</Typography>
      )}
    </>
  );
}

export default App;
