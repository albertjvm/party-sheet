import React, { useState } from "react";

export const ColumnContext = React.createContext();

const COLUMN_SETS = {
    DEFAULT: ['str', 'dex', 'con', 'int', 'wis', 'cha'],
    str: ['str', 'athletics'],
    dex: ['dex', 'acrobatics', 'sleight of hand', 'stealth'],
    int: ['int', 'arcana', 'history', 'investigation', 'nature', 'religion'],
    wis: ['wis', 'animal handling', 'insight', 'medicine', 'perception', 'survival'],
    cha: ['cha', 'deception', 'intimidation', 'performance', 'persuasion']
};

const arraysEqual = (a1, a2) => {
    if (a1.length != a2.length) return false;
    return a1.filter(i => !a2.includes(i)).length === 0;
};

export const ColumnProvider = ({ children }) => {
    const [columns, setColumns] = useState(COLUMN_SETS.DEFAULT);
    const [isDefault, setIsDefault] = useState(true);

    const setExists = (key) => COLUMN_SETS.hasOwnProperty(key);

    const setColumnSet = (key) => {
        if (setExists(key)) {
            if(arraysEqual(columns, COLUMN_SETS[key])) {
                setColumns(COLUMN_SETS.DEFAULT);
                setIsDefault(true);
            } else {
                setColumns(COLUMN_SETS[key]);
                setIsDefault(false);
            }
            return true;
        } else {
            return false;
        }
    };

    return (
        <ColumnContext.Provider value={{
            columns,
            setColumnSet,
            isDefault,
            setExists
        }}>
            {children}
        </ColumnContext.Provider>
    )
};