import React from 'react';
import { 
    Paper, 
    Typography, 
    Avatar 
} from '@mui/material';

const userProfile = {
    name: 'Jesus Marroquin',
    email: 'jesus@example.com',
    phone: 81182213123,
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343'
  }

const UserProfile: React.FC = () => {
    const getInitials = (name:string) => {
        const names = name.split(' ');
        const initials = names.map(n => n.charAt(0));
        return initials.join('').toUpperCase();
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar style={{ width: 100, height: 100, marginBottom: 20, backgroundColor: 'gray' }}>
                <Typography variant="h3">{getInitials(userProfile.name)}</Typography>
            </Avatar>
            <Typography variant="h4" gutterBottom>
                {userProfile.name}
            </Typography>
            
            <Paper style={{ width: '100%', padding: 20 }}>
                <Typography variant="h6" gutterBottom>
                    Information
                </Typography>
                <Typography>Email: {userProfile.email}</Typography>
                <Typography>Phone: {userProfile.phone}</Typography>
                <Typography>Address: {userProfile.phone}</Typography>
            </Paper>
        </div>
    );
}

export default UserProfile;
