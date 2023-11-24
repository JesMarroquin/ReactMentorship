import { Grid } from "@mui/material";
import User from "./User";

function UserList(props: User[]) {
  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <User
            name={props[0].name}
            email={props[0].email}
            phone={props[0].phone}
            address={props[0].address}
          ></User>
        </Grid>
        <Grid item xs={6}>
          <User
            name={props[1].name}
            email={props[1].email}
            phone={props[1].phone}
            address={props[1].address}
          ></User>
        </Grid>
      </Grid>
    </>
  );
}

export default UserList;
