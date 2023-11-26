import { Link } from 'react-router-dom';

const fecha = new Date();
const mes = fecha.getMonth() + 1; //mes en numero (sumarle 1 para tener el actual)
const anoActual = fecha.getFullYear(); // año actual

export default function Navigation() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <p className="navbar-brand m-2" to="/Calendario">Imagenología</p>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <div className="nav-link" href="/">
                  <Link className="nav-link" to={"/Calendario/Calendario/"+anoActual+"_"+mes}>Calendario</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="/">
                  <Link className="nav-link" to='/Calendario/Historial'>Historial de modificaciones</Link>
                </div>
              </li>
            </ul>
          </div>
          <span className="navbar-text m-2">
              <div className="nav-link" href="/">
                <Link className="nav-link" to='/Crear_usuario'>Crear Usuario</Link>
              </div>
          </span>
          <span className="navbar-text m-2">
              <div className="nav-link" href="/">
                <Link className="nav-link" to='/Iniciar_sesion'>Iniciar Sesion</Link>
              </div>
          </span>
        </nav>
      </div>
  )
}


