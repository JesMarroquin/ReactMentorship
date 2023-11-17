import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import  ProfilesContextProvider from './UseProfilesContext';

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { userProfiles } = useContext(ProfilesContextProvider);

  const user = userProfiles.find(() => user.email === id);

  if (user === undefined) {
    return <Typography variant="h5">User not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">{user.name}</Typography>
      <Typography key={user.email}>Email: {user.email}</Typography>
      <Typography key={user.phone}>Phone: {user.phone}</Typography>
      <Typography key={user.address}>Address: {user.address}</Typography>
    </div>
  );
};

export default UserProfile;