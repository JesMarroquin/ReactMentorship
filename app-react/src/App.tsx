import "./App.css";
import UserList from "./components/UserList";
import { createContext, useEffect, useState } from "react";
import User, { IUser } from "./components/User";
import { users } from "./mocks/users";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const UserContext = createContext<IUser[] | undefined>([]);

function App() {
  const [usersList, setUsersList] = useState<IUser[]>();
  useEffect(() => setUsersList(users), []);
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={usersList}>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
