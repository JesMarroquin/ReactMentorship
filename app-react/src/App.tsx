import { Typography } from "@mui/material";
import "./App.css";
import { users } from "./users";
import UserList from "./components/UserList";

function App() {
  const isVisible = true;

  return (
    <>
      {isVisible ? (
        <UserList users={users} />
      ) : (
        <Typography variant="h1">Not found...</Typography>
      )}
    </>
  );
}

export default App;
