import { Avatar, Paper, Typography } from '@mui/material';
import UserProfile from '../interfaces/userProfile';

function ProfileCard(props: UserProfile) {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Avatar style={{width:130, height:130, marginBottom:25, backgroundColor:'grey'}}>
        <Typography variant="h2" style={{textTransform:'uppercase'}}>{props.name ? (props.name).substring(0,2) : 'NA'}</Typography>
      </Avatar>
      <Typography variant="h4" style={{color:'black', marginBottom:15}}>{props.name}</Typography>
      <Paper style={{width:'100%', padding:30}}>
        <Typography variant="h5" style={{marginBottom:15}}>Information</Typography>
        <Typography variant="h6">Email: {props.email}</Typography>
        <Typography variant="h6">Phone: {props.phone}</Typography>
        <Typography variant="h6">Address: {props.address}</Typography>
      </Paper>
    </div>
  )
}

export default ProfileCard
