import React , { useState , useEffect , useContext, createContext } from 'react' 
import { boolean } from 'yup'

const AuthContext = createContext({})

const AuthProvider = ( children:any ) => {
    const [user,setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const login = (data:any)=>{
        setLoggedIn(true)
        setUser(data.user)
        console.log(data.user)
    }
    const values = {
        loggedIn,
        user,
        login
    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider , useAuth}