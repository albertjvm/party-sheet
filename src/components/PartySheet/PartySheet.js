import { useContext, useState } from 'react';
import './PartySheet.scss';
import { PartyContext } from '../../context/PartyContext';
import { CharacterRow } from '../CharacterRow';
import { ColumnContext } from '../../context/ColumnContext';
import { ModalContext } from '../../context/ModalContext';
import { RollContext } from '../../context/RollContext';

export const PartySheet = () => {
    const { party, addNewCharacter } = useContext(PartyContext);
    const { columns, setColumnSet, isDefault, setExists } = useContext(ColumnContext);
    const { setModalOpen } = useContext(ModalContext);
    const { roll } = useContext(RollContext);
    const [ locked, setLocked ] = useState(true);

    const handleClickNew = () => {
        addNewCharacter();
    };

    const handleClickRoll = (key) => {
        setModalOpen(true);
        roll(key);
    };

    const hanleClickHeader = (key) => {
        setColumnSet(key);
    };

    const sortedParty = () => (
        party.sort((c1, c2) => c1.name.localeCompare(c2.name))
    );

    return (
        <div className="PartySheet">
            <div className='Header'>
                <div className='Cell'>
                    <i 
                        className={`fa-solid fa-lock${locked ? '' : '-open'}`}
                        style={{
                            marginRight: '10px'
                        }}
                        onClick={() => setLocked(!locked)}
                    ></i>
                    Name
                </div>
                {columns.map(x => (
                    <div 
                        className='Cell' 
                        key={x}
                        onClick={() => hanleClickHeader(x)}
                    >
                        {x}
                        {setExists(x) ? (
                            <i style={{paddingLeft: '10px'}} className={`fa-solid fa-angles-${isDefault ? 'right' : 'left'}`}></i>
                        ) : ''}
                    </div>
                ))}
            </div>
            {!!party?.length && (
                sortedParty().map((p, i) => 
                    <CharacterRow key={i} character={p} locked={locked} />
                )
            )}
            <div className='Footer'>
                <button className='Cell' onClick={handleClickNew}>+ New Character</button>
                {columns.map(x => (
                    <button 
                        className='Cell' 
                        key={x}
                        onClick={() => handleClickRoll(x)}
                    >
                        {x}
                    </button>
                ))}
            </div>
        </div>
    );
};