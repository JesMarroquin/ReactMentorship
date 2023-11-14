import {IconButton, TextField, Pagination, AppBar, Toolbar, TableBody, TableCell, TableHead, TableRow, Paper}  from '@mui/material';
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import SearchIcon from "@mui/icons-material/Search"
import { useContext } from 'react';
import { ProfilesContext } from './UseProfilesContext'

interface User {
  name: string,
  email: string
  phone: number,
  address: string
}

export const UserList:React.FC = () => {

  const {userProfiles: users} = useContext(ProfilesContext)

  return (
    <div>
      <AppBar position = "static">
        <Toolbar>
            <TextField
              variant = "outlined"
              placeholder = "Search"
              size = "small"
              fullWidth
              InputProps = {{
                startAdornment: <SearchIcon />
              }}
              sx = {{backgroundColor: "white"}}
            />
        </Toolbar>
      </AppBar>
      <Paper style={{margin: 20, padding: 20}}>
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
                    {users.map((user :User, idx:number) => {
                      return (
                        <TableRow key = {idx}>
                          <TableCell>{user.name} </TableCell>
                          <TableCell>{user.phone} </TableCell>
                          <TableCell>{user.address} </TableCell>
                          <TableCell>
                            <IconButton>
                                <EditIcon  />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
              </table>
              <Pagination count={1} variant="outlined" shape="rounded" />
      </Paper>
    </div>
  );
}