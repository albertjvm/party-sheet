import { useContext } from 'react';
import './Debug.scss';
import { PartyContext } from '../../context/PartyContext';

export const Debug = () => {
    const { party, clearStorage } = useContext(PartyContext);

    return (
        <div className="Debug">
            <button onClick={clearStorage}>Clear</button>
            {JSON.stringify(party)}        
        </div>
    );
};