import React, {createContext, useContext, useState} from "react";
 
const AppContext = createContext();

const AppContextProvider = props => {
    const [width, setWidth] = useState(false);    

    const instanceApp = { 
        width,
        updateWindowWidth:(w)=>setWidth(w)

      };
     return (
        <AppContext.Provider  value={instanceApp}>
            {props.children}
        </AppContext.Provider>
    )
};

const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        return {}
    }
    return context
};

export {
    AppContextProvider,
    AppContext,
    useApp
};
