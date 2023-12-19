import { Typography } from '@mui/material';
import ProfileCard from './components/ProfileCard';
import UsersList from './components/UsersList';
import { useListUsersContext } from './providers/usersProvider';
import { useFetch } from './hooks/useFetch';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

function App() {
  const { users, loader, error } = useFetch();

  return (
    <>
      <useListUsersContext.Provider value={{users}}>
        <>
          {
            !error ?
            !loader ?
            <Routes>
              <Route path="/" element={
                <UsersList/>
              }></Route>
              <Route path="/userDetails/:userId" element={
                <ProfileCard/>
              }></Route>
              <Route
                path="/profileDetails/:id"
                element={<Navigate to="/userDetails/:userId"></Navigate>}
              ></Route>
            </Routes>
            :
            <Typography variant="h2">Loading...</Typography>
            :
            <Typography variant="h2">Error</Typography>
          }
        </>
      </useListUsersContext.Provider>
    </>
  )
}

export default App
