import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function User({ name, email, phone, address }) {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    const displayInfo = true;

    return (
        <Container maxWidth="sm" style={containerStyle}>
            <Avatar sx={{ width: 100, height: 100 }}>GG</Avatar>

            {displayInfo && <>
                <Typography variant="h3">{name}</Typography>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5">Information</Typography>
                        <Typography variant="h6" component="div">Email: {email}</Typography>
                        <Typography variant="h6" component="div">Phone: {phone}</Typography>
                        <Typography variant="h6" component="div">Address: {address}</Typography>
                    </CardContent>
                </Card>
            </>}
        </Container>
    )
}

export default User
