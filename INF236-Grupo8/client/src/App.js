import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
//import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Formulario } from './components/Formulario';

function App() {
    const [user, setUser] = useState([])
    return (
    <div className="App">
      {!user.length > 0 ? <Formulario setUser={setUser} /> : <Home user={user} setUser={setUser} />}
    </div>
  );
}

export default App;



