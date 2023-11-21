import User from '../interfaces/user';
import { createContext } from 'react';

interface userContextProps {
  users: User[] | undefined
}

export const useListUsersContext = createContext<userContextProps>({users: undefined});