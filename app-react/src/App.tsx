import { Typography } from "@mui/material";
import "./App.css";
import User from "./components/User";
import UserList from "./components/UserList";
import { users } from "./users";

function App() {
  const userProfile = {
    name: "Niver Martínez",
    email: "niver@example.com",
    phone: 81123456789,
    address: "21 Main Street, Monterrey Nuevo Leon, CP65343",
  };

  // Conditional Rendering
  const isVisible = false;
  const isVisibleList = true;

  return (
    <>
      {isVisible ? (
        <User
          name={userProfile.name}
          email={userProfile.email}
          phone={userProfile.phone}
          address={userProfile.address}
        />
      ) : isVisibleList ? (
        <UserList {...users} />
      ) : (
        <Typography variant="h1">Not found...</Typography>
      )}
    </>
  );
}

export default App;
