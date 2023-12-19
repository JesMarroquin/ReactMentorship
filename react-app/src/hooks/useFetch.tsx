import User from '../interfaces/user'
import { useEffect, useState } from 'react';

export const useFetch = () => {
    const [users, setUsers] = useState<User[] | undefined>(undefined);
    const [loader, setLoader] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        setLoader(true);
        fetch(apiUrl).then((response) => {
            if (!response.ok) {
                throw new Error('Network Down');
            }
            return response.json();
        }).then((success) => {
            const currentUserList: User[] = mapResponseToUserList(success)
            setUsers(currentUserList);
        }).catch((error) => {
            setError(error);
        }).finally(() => {
            setLoader(false);
        });
    }, []);

    const mapResponseToUserList = (data: any) => {
        const mappedData: User[] = data.results.map((userItem: any) => {
            return {
                id: userItem.login.uuid,
                name: `${userItem.name.first} ${userItem.name.last}`,
                email: userItem.email,
                phone: userItem.phone,
                address: `${userItem.location.street.name} ${userItem.location.street.number} ${userItem.location.country} ${userItem.location.postcode}`,
                age: userItem.dob.age,
                picture: userItem.picture.medium
            }
        });

        return mappedData;
    }

    return { users, loader, error };
};