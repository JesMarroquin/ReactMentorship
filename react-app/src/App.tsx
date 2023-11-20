import ProfileCard from './components/ProfileCard';
import UsersList from './components/UsersList';
import UserProfile from './interfaces/userProfile';
import UsersProvider from './providers/usersProvider';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import './App.css';

function App() {
  const [isUserProfileVisible, setUserProfileVisibility] = useState(false);
  const userProfile: UserProfile = {
    name: 'Mariel Calderon',
    email: 'mcalderon@sample.com',
    phone: 8113456233,
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343'
  };

  const handleClick = () => {
    setUserProfileVisibility(!isUserProfileVisible);
  }

  return (
    <>
      <nav>
        <Link to="/">Homepage</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <UsersProvider>
            <UsersList/>
          </UsersProvider>
        }></Route>
        <Route path="/userDetails/:userId" element={
          <UsersProvider>
            <ProfileCard/>
          </UsersProvider>
        }></Route>
        <Route
          path="/profileDetails/:id"
          element={<Navigate to="/userDetails/:userId"></Navigate>}
        ></Route>
      </Routes>
    </>
  )
}

export default App
