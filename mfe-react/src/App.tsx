import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import './App.css'

function App() {
  const userProfile = { name: 'Gustavo Garcia', email: 'gustavo@example.com', phone: 81123456789, address: '21 Main Street, Monterrey Nuevo Leon, CP65343' };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <Container maxWidth="sm" style={containerStyle}>
      <Avatar sx={{ width: 100, height: 100 }}>GG</Avatar>

      <Typography variant="h3">{userProfile.name}</Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5">Information</Typography>
          <Typography variant="h6" component="div">Email: {userProfile.email}</Typography>
          <Typography variant="h6" component="div">Phone: {userProfile.phone}</Typography>
          <Typography variant="h6" component="div">Address: {userProfile.address}</Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default App
