import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const KEY = 'party-sheet-party';

export const PartyContext = React.createContext();

export const PartyProvider = ({ children }) => {
    const [party, setParty] = useState(null);

    useEffect(() => {
        if (party !== null) {
            window.localStorage.setItem(KEY, JSON.stringify(party));
        }
    }, [party]);

    useEffect(() => {
        const storedPartyJSON = window.localStorage.getItem(KEY);

        if (storedPartyJSON === null) {
            setParty([]);
        } else {
            setParty(JSON.parse(storedPartyJSON));
        }
    }, []);

    const addNewCharacter = () => {
        setParty([
            ...party,
            {
                id: uuid(),
                name: '',
                str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0
            }
        ]);
    };

    const updateValue = ({ characterId, key, value }) => {
        const character = party.find(c => c.id === characterId);

        setParty([
            ...(party.filter(c => c.id !== characterId)),
            {
                ...character,
                [key]: value
            }
        ])
    };

    const clearStorage = () => {
        setParty([]);
    }

    return (
        <PartyContext.Provider value={{
            party,
            setParty,
            addNewCharacter,
            clearStorage,
            updateValue
        }}>
            {children}
        </PartyContext.Provider>
    )
};