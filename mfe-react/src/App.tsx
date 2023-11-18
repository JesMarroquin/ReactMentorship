import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import UserList from './components/UserList';
import { User as UserModel } from './models/User';
import { UsersContext } from './contexts';
import User from './components/User';

import './App.css'

function App() {
  const [users, setUsers] = useState<Array<UserModel>>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10').then(response => {
      if (!response.ok) {
        return { results: [] };
      }

      return response.json();
    }).then(({ results }) => {
      setUsers(results.map((r: any, index: number) => ({
        id: index.toString(),
        name: `${r.name.first} ${r.name.last}`,
        email: r.email,
        phone: r.phone,
        address: `${r.location.street.name} ${r.location.street.number}, ${r.location.city}, ${r.location.state}, ${r.location.country}`
      })));
    });
  }, []);

  return (
    <UsersContext.Provider value={users}>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </UsersContext.Provider>
  )
}

export default App
