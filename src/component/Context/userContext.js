import React from "react";

const userContext = React.createContext("SOAir")

const Userprovider = userContext.Provider 
const UserConsumer = userContext.Consumer

export{Userprovider, UserConsumer} 
export default userContext