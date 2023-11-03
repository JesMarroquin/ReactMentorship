import User from './components/User'
import './App.css'

function App() {
  const userProfile = {
    name: 'Mariel Calderon',
    email: 'mcalderon@sample.com',
    phone: 8113456233,
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343'
  }

  return (
    <>
      <User profile={userProfile}/>
    </>
  )
}

export default App
