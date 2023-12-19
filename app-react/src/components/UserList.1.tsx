import { Grid } from "@mui/material";
import User from "./User";

export function UserList(props: { users: User[] }) {
  return (
    <Grid spacing={4}>
      {props.users.map((user: User) => {
        <Grid item xs={6}>
          <User
            name={user.name}
            email={user.email}
            phone={user.phone}
            address={user.address}
          ></User>
        </Grid>;
      })}
    </Grid>
  );
}
