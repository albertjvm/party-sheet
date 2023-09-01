import { useContext } from 'react';
import './App.scss';
import { PartySheet } from './components/PartySheet';
import { ModalContext } from './context/ModalContext';
import { RollModal } from './components/RollModal/RollModal';

function App() {
  const { modalOpen } = useContext(ModalContext);
  return (
    <div className="App">
      <PartySheet />
      {modalOpen && <RollModal />}
    </div>
  );
}

export default App;
