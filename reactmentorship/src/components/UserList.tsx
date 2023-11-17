import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, TextField, Pagination, AppBar, Toolbar, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import SearchIcon from "@mui/icons-material/Search"
import { Link } from 'react-router-dom';

interface User {
  name: string,
  email: string
  phone: number,
  address: string
}

interface ApiUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: number; 
  location: {
    street: {
      name: string;
    };
    city: string;
    state: string;
    postcode: string;
  };
}

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch data from the API
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then((data: { results: ApiUser[] })  => {
        // Extract relevant user information from the API response
        const newUsers = data.results.map((result) => ({
          name: `${result.name.first} ${result.name.last}`,
          email: result.email,
          phone: result.phone,
          address: `${result.location.street.name}, ${result.location.city}, ${result.location.state}, ${result.location.postcode}`,
        }));
        setUsers(newUsers);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleUserClick = (email: string) => {
    // Redirect to the user's detailed page
    navigate(`/user/${email}`);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: <SearchIcon />
            }}
            sx={{ backgroundColor: "white" }}
          />
        </Toolbar>
      </AppBar>
      <Paper style={{ margin: 20, padding: 20 }}>
        <table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
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
            {users.map((user: User, idx: number) => {
              return (
                <TableRow key={idx} onClick={() => handleUserClick(user.email)} style={{ cursor: 'pointer' }}>
                  <TableCell>
                    <Link to={`/user/${user.email}`}>{user.name}</Link>
                  </TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </table>
        <Pagination count={1} variant="outlined" shape="rounded" />
      </Paper>
    </div>
  );
}