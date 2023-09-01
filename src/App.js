import { useContext } from 'react';
import './App.scss';
import { Debug } from './components';
import { PartySheet } from './components/PartySheet';
import { ModalContext } from './context/ModalContext';
import { RollModal } from './components/RollModal/RollModal';

function App() {
  const { modalOpen } = useContext(ModalContext);
  return (
    <div className="App">
      <PartySheet />
      {/* <Debug /> */}
      {modalOpen && <RollModal />}
    </div>
  );
}

export default App;
