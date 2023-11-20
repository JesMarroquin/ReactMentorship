import User from '../interfaces/user';
import { createContext, useContext, useState } from 'react';

const UsersContext = createContext<any>(null);

const userList: User[] = [{
    name: 'Calvin Moore',
    picture: 'https://www.fakepersongenerator.com/Face/male/male1085773603546.jpg',
    job: 'Photographer',
    age: 42,
    isAvailable: true,
    email: 'email@company.co',
    phone: 8881234567,
    address: 'Highway Street #123'
  }, {
    name: 'Evelyn Johnson',
    picture: 'https://www.fakepersongenerator.com/Face/female/female20151024414430084.jpg',
    job: 'Medical Equipment Repairer',
    age: 33,
    isAvailable: true,
    email: 'email@company.co',
    phone: 8881234567,
    address: 'Highway Street #123'
  }, {
    name: 'Matthew Ferguson',
    picture: 'https://www.fakepersongenerator.com/Face/male/male20161086589553802.jpg',
    job: 'Salesman',
    age: 31,
    isAvailable: false,
    email: 'email@company.co',
    phone: 8881234567,
    address: 'Highway Street #123'
  }, {
    name: 'Lynda Houston',
    picture: 'https://www.fakepersongenerator.com/Face/female/female20161025163808777.jpg',
    job: 'Painter',
    age: 36,
    isAvailable: true,
    email: 'email@company.co',
    phone: 8881234567,
    address: 'Highway Street #123'
  }];

const UsersProvider: any = ({children}) => {
    const [listUsers, setListUsers] = useState<User[]>(userList);
    return (
        <UsersContext.Provider value={listUsers}>{children}</UsersContext.Provider>
    );
}

export const useListUsersContext = () => useContext(UsersContext);
export default UsersProvider;