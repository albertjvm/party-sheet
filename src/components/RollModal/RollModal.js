import { useContext } from 'react';
import './RollModal.scss';
import { ModalContext } from '../../context/ModalContext';
import { RollContext } from '../../context/RollContext';
import { PartyContext } from '../../context/PartyContext';

export const RollModal = () => {
    const { setModalOpen } = useContext(ModalContext);
    const { result, attribute } = useContext(RollContext);
    const { party } = useContext(PartyContext);

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <div className="RollModal-wrapper" onClick={handleClose}>
            <div className='RollModal-body'>
                <h2>{attribute}</h2>
                {party.map(({id, name}) => (
                    <div className="Row" key={id}>
                        <span className='Name'>{name}: </span>
                        <span className='Result'>{result[id]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};