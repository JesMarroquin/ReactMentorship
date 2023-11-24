import "./App.css";
import { Avatar, Typography, Card, CardContent, Grid } from "@mui/material";

function App() {
  const userProfile = {
    name: "Niver Martínez",
    email: "niver@example.com",
    phone: 81123456789,
    address: "21 Main Street, Monterrey Nuevo Leon, CP65343",
  };

  const getCaps = (name: string) => {
    return name.split(" ")[0][0] + name.split(" ")[1][0];
  };

  return (
    <>
      <Grid
        container
        rowGap={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar sx={{ width: 100, height: 100 }}>
          <Typography sx={{ fontSize: 36 }}>
            {getCaps(userProfile.name)}
          </Typography>
        </Avatar>
        <Typography variant="h3">{userProfile.name}</Typography>
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              Information
            </Typography>
            <Typography variant="body2" sx={{ width: 250 }}>
              {`Email: ${userProfile.email}`}
              <br />
              {`Phone: ${userProfile.phone}`}
              <br />
              {`Address: ${userProfile.address}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default App;
