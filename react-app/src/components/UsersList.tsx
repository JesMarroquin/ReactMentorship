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

function UsersList({userList}: any) {
  return (
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
          <TableRow>
            <TableCell>Jane</TableCell>
            <TableCell>Surgeon</TableCell>
            <TableCell align="center">33</TableCell>
            <TableCell>
              <IconButton aria-label="edit"><EditIcon /></IconButton>
              <IconButton aria-label="delete"><DeleteIcon /></IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersList
