import React, { useState } from "react";

export const ModalContext = React.createContext();

export const ModalProvider = ({children}) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <ModalContext.Provider value={{
            modalOpen,
            setModalOpen
        }}>
            {children}
        </ModalContext.Provider>
    );
};