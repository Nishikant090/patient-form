// src/App.js
import React from 'react';
import PatientForm from './PatientForm.js'
import Chatbot from './chatbot.js'


import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      <PatientForm />
    </div>
  );
}

export default App;
