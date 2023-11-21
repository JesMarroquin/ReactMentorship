import { Avatar, Paper, Typography } from '@mui/material';
import User from '../interfaces/user'
import { useListUsersContext } from '../providers/usersProvider';
import { Link, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

function ProfileCard() {
  const currentParams: any = useParams();
  const { users } = useContext(useListUsersContext);
  const defaultUserProfile: User = {
    name: 'Mariel Calderon',
    email: 'mcalderon@sample.com',
    phone: '8113456233',
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343',
    picture: 'https://www.fakepersongenerator.com/Face/female/female20151024414430084.jpg',
    age: 33
  };
  const [userProfile, setUserProfile] = useState(defaultUserProfile);

  useEffect(() => {
    const currentUser: User | undefined = users ? users[currentParams.userId] : undefined;
    if (currentUser) {
      setUserProfile(currentUser);
    }
  });

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <nav>
        <Link to="/">Go Back</Link>
      </nav>
      <Avatar src={userProfile.picture} style={{width:130, height:130, marginBottom:25, backgroundColor:'grey'}}>
        <Typography variant="h2" style={{textTransform:'uppercase'}}>{userProfile.name ? (userProfile.name).substring(0,2) : 'NA'}</Typography>
      </Avatar>
      <Typography variant="h4" style={{color:'black', marginBottom:15}}>{userProfile.name}</Typography>
      <Paper style={{width:'100%', padding:30}}>
        <Typography variant="h5" style={{marginBottom:15}}>Information</Typography>
        <Typography variant="h6">Email: {userProfile.email}</Typography>
        <Typography variant="h6">Phone: {userProfile.phone}</Typography>
        <Typography variant="h6">Address: {userProfile.address}</Typography>
      </Paper>
    </div>
  )
}

export default ProfileCard
