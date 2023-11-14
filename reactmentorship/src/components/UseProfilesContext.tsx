import {useState, createContext} from "react";

type USERS = {
  name: string,
  email: string
  phone: number,
  address: string
}

export const ProfilesContext = createContext<any>(null)

function useProfilesContext({children}: {children: JSX.Element}): JSX.Element{

    const [userProfiles, setUserProfiles] = useState<USERS[]>(
        [
          {   
            name: 'Judith Cortés',
            email: 'm.cortes@accenture.com',
            phone: 5587964545,
            address: 'Calle 5, Porvenir, Azcapotzalco, 02940',
          },
          {
            name: 'Raul Pérez',
            email: 'r.perez@accenture.com',
            phone: 5582673546,
            address: 'Río Tiber, Cuauhtémoc, Cuauhtémoc, 06600',
          },
          {
            name: 'André Gutierrez',
            email: 'a.gutierrez@accenture.com',
            phone: 5598099937,
            address: 'FFCC Nacionales, Reynosa T., Azcapotzalco, 02200',
          },
          {
            name: 'Mariela Jimenez',
            email: 'm.jimenez@accenture.com',
            phone: 5519375243,
            address: 'Miguel Shultz, San Rafael, Cuauhtémoc, 06670',
          }
        ]
      );
    
      const profilesValue =  {userProfiles, setUserProfiles}

    return (
        <ProfilesContext.Provider value={profilesValue}>
            {children}
        </ProfilesContext.Provider>
    );
        
}

export default useProfilesContext;