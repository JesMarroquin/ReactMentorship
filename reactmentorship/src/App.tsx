import { Typography } from "@mui/material"
import { UserList } from "./components/UserList"
import ProfilesContext from "./components/UseProfilesContext"


function App() {

  return ( 
    <ProfilesContext>
      <div style = {{display:"flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
        <>
          <Typography variant="h1">Users CRUD</Typography>
        </>
        <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
          <UserList />
        </div>
      </div>
    </ProfilesContext>
  )
}

export default App;