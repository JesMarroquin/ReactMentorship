import { useEffect, useState } from 'react';

import UserList from './components/UserList';
import { User } from './models/User';
import { UsersContext } from './contexts';

import './App.css'

function App() {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    setUsers([
      { name: 'Gustavo Garcia', email: 'gustavo@example.com', phone: 81123456789, address: '21 Main Street, Monterrey Nuevo Leon, CP65343' }
    ]);
  }, []);

  return (
    <UsersContext.Provider value={users}>
      <UserList />
    </UsersContext.Provider>
  )
}

export default App
