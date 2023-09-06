import { useContext } from 'react';
import { TextInput } from '../TextInput';
import './CharacterRow.scss';
import { PartyContext } from '../../context/PartyContext';
import { ColumnContext } from '../../context/ColumnContext';

export const CharacterRow = ({ character, locked }) => {
    const { updateValue } = useContext(PartyContext);
    const { columns } = useContext(ColumnContext);
    const { id, name, ...scores } = character;

    return (
        <div className="CharacterRow">
            <TextInput 
                className='Cell Name' 
                value={name} 
                onChange={v => updateValue({characterId: id, key: 'name', value: v})} 
                readOnly={locked}
            />
            {columns.map(k => (
                <TextInput 
                    key={k}
                    className='Cell' 
                    type="number"
                    value={scores[k] || 0} 
                    onChange={v => updateValue({characterId: id, key: k, value: parseInt(v)})} 
                    readOnly={locked}
                />
            ))}
        </div>
    );
};