import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = props => {
    const [workspaces, setWorkspaces] = useState([]);

    const instanceApp = {
        workspaces,
        createWorkSpace: (item) => setWorkspaces([...workspaces, item]),
        deleteWorkspace: (item) => setWorkspaces([...workspaces.filter(e => e.id !== item.id)])
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
