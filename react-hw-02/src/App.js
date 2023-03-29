import './App.css';
import React from 'react';
import User from "./components/Funccomp.js";
import Form from './components/Forms';
import LifeCycle from './components/Lifecycle-methods.js'


function App() {
  return (
    <div className="App">
      <User/>
      <Form />
      <LifeCycle />
    </div>
  );
}

export default App;