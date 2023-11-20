import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import User from '../interfaces/user'
import { useListUsersContext } from '../providers/usersProvider';
import { useNavigate } from 'react-router-dom';

function UsersList() {
  const navigate: any = useNavigate();
  const userList: User[] = useListUsersContext();

  const goToDetails = (userIndex: number) => {
    navigate(`/userDetails/${userIndex}`);
  }
  
  return (
    <>
      <h1 style={{color: 'black'}}>Users CRUD</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Job</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell>
                <IconButton aria-label="add"><AddIcon /></IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((userItem: any, index: number) => (
              <TableRow key={userItem.name + index}>
                <TableCell component="th" scope="row">{userItem.name}</TableCell>
                <TableCell>{userItem.job}</TableCell>
                <TableCell align="center">{userItem.age}</TableCell>
                <TableCell>
                  <Button onClick={() => goToDetails(index)} variant="contained">Details</Button>
                  <IconButton aria-label="edit"><EditIcon /></IconButton>
                  <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default UsersList
