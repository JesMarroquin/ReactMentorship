import User from './components/User'
import UserProfile from './interfaces/userProfile'
import './App.css'

function App() {
  const userProfile: UserProfile = {
    name: 'Mariel Calderon',
    email: 'mcalderon@sample.com',
    phone: 8113456233,
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343'
  }

  const isUserProfileVisible: boolean = false

  if (isUserProfileVisible) {
    return (
      <>
        <User name={userProfile.name} email={userProfile.email} phone={userProfile.phone} address={userProfile.address}/>
      </>
    )
  } else {
    return <h1 style={{color:'black'}}>Adventure Awaits!</h1>
  }
}

export default App
