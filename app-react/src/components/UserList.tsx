import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../App";
import User, { IUser } from "./User";
import { useNavigate } from "react-router-dom";

function UserList() {
  const users = useContext<IUser[] | undefined>(UserContext);
  const navigate = useNavigate();
  const isVisible = false;
  return (
    <>
      {isVisible ? (
        <Grid container spacing={2}>
          {users?.map((user: IUser) => {
            return (
              <Grid item xs={4}>
                <User
                  name={user.name}
                  email={user.email}
                  phone={user.phone}
                  address={user.address}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user: IUser, index: number) => (
                <TableRow
                  hover
                  key={user.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/user?id=${index}`)}
                >
                  <TableCell>{index}</TableCell>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default UserList;
