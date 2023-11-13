import React, { Component } from 'react'
import { Link } from "react-router-dom";

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const fecha = new Date();
const mes = fecha.getMonth(); //mes en numero (sumarle 1 para tener el actual)
const mesActual = meses[mes]; //mes en palabras
const anoActual = fecha.getFullYear(); // año actual
const diasMes = new Date(anoActual, mes + 1, 0).getDate(); //límite de dias del mes
let dias = [];
for(var i = 1; i<= diasMes; i++){
  dias.push(i)
}

export default class Calendario extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div className='row align-items-start p-2'>
            <div class="btn-group btn-group-toggle col-md-4" data-toggle="buttons">
              <Link className="btn btn-secondary col-md-1" to='/Calendario/Resonancia' role="button">Resonancia</Link>
              <Link className="btn btn-secondary col-md-1" to='/Calendario/Scanner' role="button">Scanner</Link>
              <Link className="btn btn-secondary col-md-1" to='/Calendario/Radiografia' role="button">Radiografía</Link>
              <Link className="btn btn-secondary active col-md-1" to='/Calendario/Ecografia' role="button">Ecografía</Link>
            </div>
            <Link className="btn btn-primary col-md-1" to='/Calendario' role="button">Mes anterior</Link>
            <p className='text-center col-md-6'><h4>Calendario de {mesActual} de Ecografía {anoActual}</h4></p>
            <Link className="btn btn-primary col-md-1" to='/Calendario' role="button">Mes sigiente</Link>
          </div>
        </div>
        <div>
          {dias.map(mes => 
          <div className='container-fluid'>
            <div className='row align-items-start'>
              <div className='card cardbody text-center m-2 col-md-1'>
                <h2>{mes}</h2>
                <h6>{mesActual}</h6>
              </div>
              <div className='card cardbody col m-2'>
                <div className='container-fluid'>
                  <div className='row align-items-start'>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2">
                        <h5><Link className="nav-link" to='/Calendario/Crear'>08:30</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2">
                        <h5><Link className="nav-link" to='/Calendario/Crear'>09:00</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2">
                        <h5><Link className="nav-link" to='/Calendario/Crear'>09:30</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2">
                        <h5><Link className="nav-link" to='/Calendario/Crear'>10:00</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2" >
                        <h5><Link className="nav-link" to='/Calendario/Crear'>10:30</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2" >
                        <h5><Link className="nav-link" to='/Calendario/Crear'>11:00</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2" >
                        <h5><Link className="nav-link" to='/Calendario/Crear'>11:30</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2" >
                        <h5><Link className="nav-link" to='/Calendario/Crear'>12:00</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2" >
                        <h5><Link className="nav-link" to='/Calendario/Crear'>12:30</Link></h5>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>

    )
  }
}
