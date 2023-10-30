import { Box, Paper, Typography } from '@mui/material';
import '../App.css';

const User = () => {
    const userProfile = {
        name: 'Judith Cortés',
        email: 'm.cortes@accenture.com',
        phone: 5542690991,
        address: 'Calle 5, Porvenir, Azcapotzalco, 02940',
      };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="div" className="profile-info">
            {userProfile.name}
        </Typography>
        <Paper elevation={1} className="info-paper">
            <Typography variant="h6" fontWeight="bold">
                Information
            </Typography>
            <Typography variant="body1">Email: {userProfile.email}</Typography>
            <Typography variant="body1">Phone: {userProfile.phone}</Typography>
            <Typography variant="body1">Address: {userProfile.address}</Typography>
        </Paper>
  </Box>
  );
};

export default User;


