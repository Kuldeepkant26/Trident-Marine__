import React from 'react'

export const UserContext = React.createContext();
function UserProvider({ children }) {
    const [user, setUser] = React.useState(null);
    const [testvar, setTestVar] = React.useState('testVar001');
    return (
        <UserContext.Provider value={{testvar}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
