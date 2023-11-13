import User from './components/User'
import './App.css'

function App() {
  const userProfile = { name: 'Gustavo Garcia', email: 'gustavo@example.com', phone: 81123456789, address: '21 Main Street, Monterrey Nuevo Leon, CP65343' };

  return (
    <>
      <User {...userProfile} />
    </>
  )
}

export default App
