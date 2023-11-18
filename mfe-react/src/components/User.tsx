import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UsersContext } from '../contexts';
import { User as UserModel } from '../models/User';


function User() {
    const { id } = useParams();
    const users = useContext(UsersContext);

    const [user, setUser] = useState<UserModel | null>(null);

    useEffect(() => {
        const u = users.find(u => u.id === id);
        u && setUser(u);
    }, []);

    // TODO : Obtain info of user with id
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    const getInitials = (text: string) => {
        const [firstName, lastName] = text.split(' ');
        return firstName.charAt(0) + lastName.charAt(0);
    }

    return (
        <Container maxWidth="sm" style={containerStyle}>
            {user && <>
                <Avatar sx={{ width: 100, height: 100 }}>{getInitials(user.name)}</Avatar>

                <Typography variant="h3">{user.name}</Typography>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5">Information</Typography>
                        <Typography variant="h6" component="div">Email: {user.email}</Typography>
                        <Typography variant="h6" component="div">Phone: {user.phone}</Typography>
                        <Typography variant="h6" component="div">Address: {user.address}</Typography>
                    </CardContent>
                </Card>
            </>}
        </Container>
    )
}

export default User
