//import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Calendario_Res from './components/Calendario_Res'
import Calendario_Scan from './components/Calendario_Scan'
import Calendario_Rad from './components/Calendario_Rad'
import Calendario_Eco from './components/Calendario_Eco'
import CreateHora from './components/CreateHora'
import Historial from './components/Historial'
import Perfil from './components/Perfil'
import Navigation from './components/Navigation'
import Create_user from './components/Create_user'
import Iniciar_sesion from './components/Iniciar_sesion';
import Calendario from './components/Calendario';

function App() {

  return (
    <Router>
      <Navigation/>

      <Routes>
        <Route path='/Calendario/Resonancia/:id' exact Component={Calendario_Res}/>
        <Route path='/Calendario/Scanner/:id' exact Component={Calendario_Scan}/>
        <Route path='/Calendario/Radiografia/:id' exact Component={Calendario_Rad}/>
        <Route path='/Calendario/Ecografia/:id' exact Component={Calendario_Eco}/>
        <Route path='/Calendario/Crear/:id' exact Component={CreateHora}/>
        <Route path='/Calendario/Historial' exact Component={Historial}/>
        <Route path='/Perfil' exact Component={Perfil}/>
        <Route path='/Crear_usuario' exact Component={Create_user}/>
        <Route path='/Iniciar_sesion' exact Component={Iniciar_sesion}/>
        <Route path='/Calendario/Calendario/:id' exact Component={Calendario}/>
      </Routes>
    </Router>
  )
}

export default App;



