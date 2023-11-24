import { Avatar, Typography, Card, CardContent, Grid } from "@mui/material";

interface User {
  name: string;
  email: string;
  phone: number;
  address: string;
}

function User(props: User) {
  const getCaps = (name: string) => {
    return name.split(" ")[0][0] + name.split(" ")[1][0];
  };
  return (
    <Grid
      container
      rowGap={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar sx={{ width: 100, height: 100 }}>
        <Typography sx={{ fontSize: 36 }}>{getCaps(props.name)}</Typography>
      </Avatar>
      <Typography variant="h3">{props.name}</Typography>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            Information
          </Typography>
          <Typography variant="body2" sx={{ width: 250 }}>
            {`Email: ${props.email}`}
            <br />
            {`Phone: ${props.phone}`}
            <br />
            {`Address: ${props.address}`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default User;
