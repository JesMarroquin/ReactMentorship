import { Avatar, Paper, Typography } from '@mui/material';
import User from '../interfaces/user'
import { useListUsersContext } from '../providers/usersProvider';
import { useParams } from 'react-router-dom';

function ProfileCard() {
  const currentParams: any = useParams();
  const userList: User[] = useListUsersContext();
  const currentUser: User = userList[currentParams.userId];

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Avatar src={currentUser.picture} style={{width:130, height:130, marginBottom:25, backgroundColor:'grey'}}>
        <Typography variant="h2" style={{textTransform:'uppercase'}}>{currentUser.name ? (currentUser.name).substring(0,2) : 'NA'}</Typography>
      </Avatar>
      <Typography variant="h4" style={{color:'black', marginBottom:15}}>{currentUser.name}</Typography>
      <Paper style={{width:'100%', padding:30}}>
        <Typography variant="h5" style={{marginBottom:15}}>Information</Typography>
        <Typography variant="h6">Email: {currentUser.email}</Typography>
        <Typography variant="h6">Phone: {currentUser.phone}</Typography>
        <Typography variant="h6">Address: {currentUser.address}</Typography>
      </Paper>
    </div>
  )
}

export default ProfileCard
