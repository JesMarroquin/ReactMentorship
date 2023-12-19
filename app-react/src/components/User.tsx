import {
  Avatar,
  Typography,
  Card,
  CardContent,
  Grid,
  Link,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

export interface IUser {
  name?: string;
  email?: string;
  phone?: number | string;
  address?: string;
}

function User(props: IUser | undefined) {
  const users = useContext<IUser[] | undefined>(UserContext);
  const [queryParameters] = useSearchParams();
  const getCaps = (name?: string) => {
    return name && name?.split(" ")?.length > 1
      ? name?.split(" ")[0][0] + name?.split(" ")[1][0]
      : "NA";
  };
  props =
    queryParameters && users ? users[Number(queryParameters.get("id"))] : props;
  return (
    <Grid
      container
      rowGap={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar sx={{ width: 100, height: 100 }}>
        <Typography sx={{ fontSize: 36 }}>{getCaps(props?.name)}</Typography>
      </Avatar>
      <Typography variant="h3">{props?.name}</Typography>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            Information
          </Typography>
          <Typography variant="body2" sx={{ width: 250 }}>
            {`Email: ${props?.email}`}
            <br />
            {`Phone: ${props?.phone}`}
            <br />
            {`Address: ${props?.address}`}
          </Typography>
        </CardContent>
      </Card>
      <Link href="/">Back to home</Link>
    </Grid>
  );
}

User.defaultProps = {
  name: "Not Avaible",
  email: "not avaible",
  phone: 55555555555,
  address: "not avaible",
};

export default User;
