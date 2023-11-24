import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

import { UserContext } from "../App";

export interface UserProps {
  name: string;
  email: string;
  phone: number;
  address: string;
}

export default function UserList() {
  const users = useContext(UserContext);
  const navigate = useNavigate();

    const goToUser = (id: string) => {
        navigate(`/${id}`);
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell>
              <IconButton color="primary">
                <AddIcon />
              </IconButton>
              <IconButton color="secondary">
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => goToUser(user.id)}
              style={{ cursor: 'pointer' }}
            >
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.phone}</TableCell>
              <TableCell align="left">{user.address}</TableCell>
              <TableCell>
                <IconButton color="secondary">
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
