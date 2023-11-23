import { createContext, useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";

export interface UserProps {
  name: string;
  email: string;
  phone: number;
  address: string;
}

export const UserContext = createContext<UserProps[]>([]);

function App() {
  const initialState: UserProps[] = [
    {
      name: "",
      email: "",
      phone: 0,
      address: "",
    },
  ];

  const userProfiles: UserProps[] = [
    {
      name: "Anaí Gonzalez",
      email: "anai@example.com",
      phone: 81123456789,
      address: "21 Main Street, Monterrey Nuevo Leon, CP65343",
    },
    {
      name: "James Doe ",
      email: "jamesdoe@example.com",
      phone: 81123456789,
      address: "21 Main Street, Monterrey Nuevo Leon, CP65343",
    },
    {
      name: "Larry Doe ",
      email: "larrydoe@example.com",
      phone: 81123456789,
      address: "21 Main Street, Monterrey Nuevo Leon, CP65343",
    },
  ];

  const [users, setUsers] = useState(initialState);

  useEffect(() => {
    setUsers(userProfiles);
  }, []);

  return (
    <UserContext.Provider value={users}>
      <UserList />
    </UserContext.Provider>
  );
}

export default App;
