import ProfileCard from './components/ProfileCard';
import UsersList from './components/UsersList';
import UserProfile from './interfaces/userProfile';
import UsersProvider from './providers/usersProvider';
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
      <button style={{marginBottom: 10}} onClick={handleClick}>Toggle User Profile</button>
      {isUserProfileVisible ? (
        <ProfileCard name={userProfile.name} email={userProfile.email} phone={userProfile.phone} address={userProfile.address}/>
      ) : (
        <h2 style={{color: 'black'}}>Adventure Awaits!</h2>
      )}
      <UsersProvider>
        <h1 style={{color: 'black'}}>Users CRUD</h1>
        <UsersList></UsersList>
      </UsersProvider>
    </>
  )
}

export default App
