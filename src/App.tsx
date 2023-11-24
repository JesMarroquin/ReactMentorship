import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import UserList from "./components/UserList";
import { User } from "./components/User";
import { User as UserModel } from "./models/User";

export const UserContext = createContext<UserModel[]>([]);

function App() {
  const [users, setUsers] = useState<Array<UserModel>>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => {
        if (!response.ok) {
          return { results: [] };
        }

        return response.json();
      })
      .then(({ results }) => {
        setUsers(
          results.map((r: any, index: number) => ({
            id: index.toString(),
            name: `${r.name.first} ${r.name.last}`,
            email: r.email,
            phone: r.phone,
            address: `${r.location.street.name} ${r.location.street.number}, ${r.location.city}, ${r.location.state}, ${r.location.country}`,
          }))
        );
      });
  }, []);

  return (
    <UserContext.Provider value={users}>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
