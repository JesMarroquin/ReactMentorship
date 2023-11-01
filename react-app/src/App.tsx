import { Avatar, Paper, Typography } from '@mui/material'
import './App.css'

function App() {
  const userProfile = {
    name: 'Mariel Calderon',
    email: 'mcalderon@sample.com',
    phone: 8113456233,
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343'
  }

  return (
    <>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Avatar style={{width:130, height:130, marginBottom:25, backgroundColor:'grey'}}>
          <Typography variant="h2">MC</Typography>
        </Avatar>
        <Typography variant="h4" style={{color:'black', marginBottom:15}}>{userProfile.name}</Typography>
        <Paper style={{width:'100%', padding:30}}>
          <Typography variant="h5" style={{marginBottom:15}}>Information</Typography>
          <Typography variant="h6">Email: {userProfile.email}</Typography>
          <Typography variant="h6">Phone: {userProfile.phone}</Typography>
          <Typography variant="h6">Address: {userProfile.address}</Typography>
        </Paper>
      </div>
    </>
  )
}

export default App
