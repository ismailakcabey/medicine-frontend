//  import React , { useState , useEffect , useContext, createContext } from 'react' 
//  import { boolean } from 'yup'

//  const AuthContext = createContext({})

//  const AuthProvider = ( {children}:any ) => {
//      const [user,setUser] = useState(null)
//      const [loggedIn, setLoggedIn] = useState(false)
//      const login = (data:any)=>{
//          setLoggedIn(true)
//          setUser(data.user)
//          console.log(data.user)
//      }
//      const values = {
//          loggedIn,
//          user,
//          login
//      }
//      return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
//  }

//  const useAuth = () => useContext(AuthContext)

//  export { AuthProvider , useAuth}




















// import React , { useState } from "react";

// type characterIdType = {
//     characterId: number;
//     setCharacterId: React.Dispatch<React.SetStateAction<number>>
// }

// const Context = React.createContext<characterIdType>({} as characterIdType)

// const CharacterIdProvider: React.FC = (children:any) =>{
// const [characterId , setCharacterId] = useState(1)
//     return (
//         <Context.Provider value={{characterId , setCharacterId}}>
//             {children}
//         </Context.Provider>
//     )
// }

// export default CharacterIdProvider

// export const useCharacterId = () => React.useContext(Context)

import React, { createContext, useState } from 'react';

interface UserContextType {
    user: {
      name: string;
      email: string;
    } | null;
    setUser: React.Dispatch<React.SetStateAction<{
      name: string;
      email: string;
    } | null>>;
  }

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => null
});

const UserProvider: React.FC<any> = ({ children }: any) => {
    console.log("başladı")
  const [user, setUser] = useState<{
    name: string;
    email: string;
  } | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
