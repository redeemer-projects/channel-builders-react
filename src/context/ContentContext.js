import { createContext, useState } from "react";

export const ContentContext = createContext(null)

function Content ({children}){

    const [contentDetails,setContentDetails] = useState()

    return(
        <ContentContext.Provider value={{contentDetails,setContentDetails}}>
            {children}
        </ContentContext.Provider>
    )
}
export default Content