import "./App.css";
import UserList from "./components/UserList";
import { createContext, useEffect, useState } from "react";
import User, { IUser } from "./components/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IUserAPI } from "./assets/interfaces/user.interfaces";
import { Backdrop, CircularProgress } from "@mui/material";

export const UserContext = createContext<IUser[] | undefined>([]);

function App() {
  const [usersList, setUsersList] = useState<IUser[]>();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    handleOpen();
    const fetchData = async () => {
      setTimeout(async () => {
        const data = await fetch("https://randomuser.me/api/?results=10");
        const users = await data.json();
        const usersMap = users.results.map((user: IUserAPI) => {
          return {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            phone: user.phone,
            address: `${user.location.street?.name} ${user.location.street.number}, ${user?.location?.city} ${user?.location?.state}, PC${user?.location?.postcode}`,
          };
        });
        handleClose();
        setUsersList(usersMap);
      }, 2000);
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={usersList}>
          <Routes>
            <Route
              path="/"
              element={
                open ? (
                  <>
                    <Backdrop
                      sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                      }}
                      open={open}
                    >
                      <CircularProgress color="secondary" />
                    </Backdrop>
                  </>
                ) : (
                  <UserList />
                )
              }
            />
            <Route path="/user" element={<User />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
