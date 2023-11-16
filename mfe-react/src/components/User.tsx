import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { User } from '../models/User';

function User(props: User) {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    const getInitials = (text: string) => {
        const [firstName, lastName] = text.split(' ');
        return firstName.charAt(0) + lastName.charAt(0);
    }

    const displayInfo = true;

    return (
        <Container maxWidth="sm" style={containerStyle}>
            <Avatar sx={{ width: 100, height: 100 }}>{getInitials(props.name)}</Avatar>

            {displayInfo && <>
                <Typography variant="h3">{props.name}</Typography>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5">Information</Typography>
                        <Typography variant="h6" component="div">Email: {props.email}</Typography>
                        <Typography variant="h6" component="div">Phone: {props.phone}</Typography>
                        <Typography variant="h6" component="div">Address: {props.address}</Typography>
                    </CardContent>
                </Card>
            </>}
        </Container>
    )
}

export default User
