import { Avatar, Paper, Typography } from '@mui/material'

function User(props: any) {
  return (
    <>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Avatar style={{width:130, height:130, marginBottom:25, backgroundColor:'grey'}}>
          <Typography variant="h2">MC</Typography>
        </Avatar>
        <Typography variant="h4" style={{color:'black', marginBottom:15}}>{props.profile.name}</Typography>
        <Paper style={{width:'100%', padding:30}}>
          <Typography variant="h5" style={{marginBottom:15}}>Information</Typography>
          <Typography variant="h6">Email: {props.profile.email}</Typography>
          <Typography variant="h6">Phone: {props.profile.phone}</Typography>
          <Typography variant="h6">Address: {props.profile.address}</Typography>
        </Paper>
      </div>
    </>
  )
}

export default User
