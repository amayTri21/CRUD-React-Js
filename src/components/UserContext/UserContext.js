import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { id: 1, name: "Amay", email: "amaytripathi@gmail.com", contact: 28000 },
    { id: 2, name: "jignesh", email: "jig@gmail.com", contact: 26000 },
    { id: 3, name: "yash", email: "yash12@gmail.com", contact: 27000 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
