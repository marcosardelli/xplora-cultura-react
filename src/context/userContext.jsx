import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => setUser(userData);
    const logout = () => {
        const isConfirmed = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
        if (isConfirmed) {
            setUser(null);
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para acceder al contexto
export const useUser = () => useContext(UserContext);