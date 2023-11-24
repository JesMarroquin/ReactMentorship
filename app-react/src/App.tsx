import { Typography } from "@mui/material";
import "./App.css";
import UserList from "./components/UserList";
import { createContext, useState } from "react";
import User from "./components/User";
import { users } from "./users";

export const UserContext = createContext<User[]>([]);

function App() {
  // useState
  const [usersList] = useState<User[]>(users);
  const isVisible = true;
  return (
    <UserContext.Provider value={usersList}>
      {isVisible ? (
        <UserList />
      ) : (
        <Typography variant="h1">Not found...</Typography>
      )}
    </UserContext.Provider>
  );
}

export default App;
