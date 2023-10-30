import './App.css';
import User from './components/User';
import { Avatar, Button} from '@mui/material';
import { useState } from "react";


function App() {

  const [show, setShow] = useState(false);
  return (
    <>
      <div className='info-container'>
        <Avatar sx={{ width: 100, height: 100, backgroundColor: 'grey', fontSize: '3rem' }}>JC</Avatar>
          <>
            {show ? (
              <User />
            ) : (
            <></>
            )}
          </>
          <div className='show-info'>
            <Button variant="outlined" onClick={() => {
             setShow(!show);
              }}>{show ? 'Hide info' : 'Show info'}</Button>
          </div>
        </div>
      </>
  )
}

export default App
