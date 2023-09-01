import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PartyProvider } from './context/PartyContext';
import { ColumnProvider } from './context/ColumnContext';
import { ModalProvider } from './context/ModalContext';
import { RollProvider } from './context/RollContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <PartyProvider>
        <ColumnProvider>
          <RollProvider>
            <App />
          </RollProvider>
        </ColumnProvider>
      </PartyProvider>
    </ModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
