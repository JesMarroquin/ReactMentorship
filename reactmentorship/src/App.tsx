import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Typography } from "@mui/material";
import { UserList } from "./components/UserList";
import  UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <>
          <Typography variant="h1">Users CRUD</Typography>
        </>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Routes>
            {/* Ruta principal ahora apunta a UserList */}
            <Route path="/" element={<UserList />} />
            <Route path="/user/:id" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
