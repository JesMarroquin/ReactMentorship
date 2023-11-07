import ProfileCard from './components/ProfileCard';
import UsersList from './components/UsersList'
import UserProfile from './interfaces/userProfile';
import User from './interfaces/user';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const userProfile: UserProfile = {
    name: 'Mariel Calderon',
    email: 'mcalderon@sample.com',
    phone: 8113456233,
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343'
  };

  const userList: User[] = [{
    name: 'Calvin',
    picture: 'https://www.fakepersongenerator.com/Face/male/male1085773603546.jpg',
    job: 'Photographer',
    age: 42,
    isAvailable: true
  }, {
    name: 'Evelyn',
    picture: 'https://www.fakepersongenerator.com/Face/female/female20151024414430084.jpg',
    job: 'Medical Equipment Repairer',
    age: 33,
    isAvailable: true
  }, {
    name: 'Matthew',
    picture: 'https://www.fakepersongenerator.com/Face/male/male20161086589553802.jpg',
    job: 'Salesman',
    age: 31,
    isAvailable: false
  }, {
    name: 'Lynda',
    picture: 'https://www.fakepersongenerator.com/Face/female/female20161025163808777.jpg',
    job: 'Painter',
    age: 36,
    isAvailable: true
  }];

  const [isUserProfileVisible, setUserProfileVisibility] = useState(false);
  const [listUsers, setListUsers] = useState<User[]>([]);
  
  useEffect(()=>{
    setListUsers(userList);
  }, []);
  
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
      <h1 style={{color: 'black'}}>Users CRUD</h1>
      <UsersList userList={listUsers}></UsersList>
    </>
  )
}

export default App
