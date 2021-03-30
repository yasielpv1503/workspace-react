import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = props => {
    const [workspace, setWorkspace] = useState({});

    const instanceApp = {
        workspace,
        createWorkSpace: (wsp) => setWorkspace(wsp),
    };
    return (
        <AppContext.Provider value={instanceApp}>
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
