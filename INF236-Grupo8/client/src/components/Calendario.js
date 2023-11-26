import { Link } from "react-router-dom";

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const fecha = new Date();
const mes = fecha.getMonth() +1; //mes en numero (sumarle 1 para tener el actual)
const mesActual = meses[mes-1]; //mes en palabras
const anoActual = fecha.getFullYear(); // año actual
const diasMes = new Date(anoActual, mes, 0).getDate(); //límite de dias del mes
let dias = [];
for(var i = 1; i<= diasMes; i++){
  dias.push(i)
}

export default function Calendario_Scan(){
    return (
      <div>
        <div className="container-fluid">
          <div className='row align-items-start p-2'>
            <div className="btn-group btn-group-toggle col-md-4" data-toggle="buttons">
              <Link className="btn btn-secondary col-md-1" to={"/Calendario/Resonancia/"+anoActual+"_"+mes} role="button">Resonancia</Link>
              <Link className="btn btn-secondary active col-md-1" to={"/Calendario/Scanner/"+anoActual+"_"+mes} role="button">Scanner</Link>
              <Link className="btn btn-secondary col-md-1" to={"/Calendario/Radiografia/"+anoActual+"_"+mes} role="button">Radiografía</Link>
              <Link className="btn btn-secondary col-md-1" to={"/Calendario/Ecografia/"+anoActual+"_"+mes} role="button">Ecografía</Link>
            </div>
            <Link className="btn btn-primary col-md-1" to={'/Calendario/Scanner/'+anoActual+'_'+(mes-1)} role="button">Mes anterior</Link>
            <div className='text-center col-md-6'><h4>Calendario de {mesActual} de Scanner {anoActual}</h4></div>
            <Link className="btn btn-primary col-md-1" to={'/Calendario/Scanner/'+anoActual+'_'+(mes+1)} role="button">Mes sigiente</Link>
          </div>
        </div>
        <div>
          {dias.map(dia => 
          <div className='container-fluid'>
            <div className='row align-items-start'>
              <div className='card cardbody text-center m-2 col-md-1'>
                <h2>{dia}</h2>
                <h6>{mesActual}</h6>
              </div>
              <div className='card cardbody col m-2'>
                <div className='container-fluid'>
                  <div className='row align-items-start'>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2">
                        <h5><Link className="nav-link" to={'/Calendario/Crear/'+anoActual+'_'+mes+'_'+dia+'_08:30_Scan'}>08:30</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2">
                        <h5><Link className="nav-link" to={'/Calendario/Crear/'+anoActual+'_'+mes+'_'+dia+'_09:30_Scan'}>09:30</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2">
                        <h5><Link className="nav-link" to={'/Calendario/Crear/'+anoActual+'_'+mes+'_'+dia+'_10:30_Scan'}>10:30</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2">
                        <h5><Link className="nav-link" to={'/Calendario/Crear/'+anoActual+'_'+mes+'_'+dia+'_11:30_Scan'}>11:30</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2" >
                        <h5><Link className="nav-link" to={'/Calendario/Crear/'+anoActual+'_'+mes+'_'+dia+'_12:30_Scan'}>12:30</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2" >
                        <h5><Link className="nav-link" to={'/Calendario/Crear/'+anoActual+'_'+mes+'_'+dia+'_14:00_Scan'}>14:00</Link></h5>
                    </button>
                    <button type="button" className="col btn btn-outline-success btn-lg m-2" >
                        <h5><Link className="nav-link" to={'/Calendario/Crear/'+anoActual+'_'+mes+'_'+dia+'_15:00_Scan'}>15:00</Link></h5>
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