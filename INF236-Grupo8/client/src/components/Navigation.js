import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Calendario_Res from './Calendario_Res'
import Calendario_Scan from './Calendario_Scan'
import Calendario_Rad from './Calendario_Rad'
import Calendario_Eco from './Calendario_Eco'
import CreateHora from './CreateHora'
import Historial from './Historial'
import Perfil from './Perfil'

export default function Navigation({ user, setUser }) {
  const handleLogout = () => {
    setUser([])
}
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <p className="navbar-brand m-2" to="/Calendario">Imagenología</p>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <Link className="nav-link" to="/Calendario/Resonancia">Calendario</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <Link className="nav-link" to='/Calendario/Historial'>Historial de modificaciones</Link>
                </a>
              </li>
            </ul>
          </div>
          <span class="navbar-text m-2">
              <a className="nav-link" href="/">
                <Link className="nav-link" onClick={handleLogout}>Cerrar Sesión</Link>
              </a>
          </span>
        </nav>

        <Routes>
          <Route path='/Calendario/Resonancia' exact Component={Calendario_Res}/>
          <Route path='/Calendario/Scanner' exact Component={Calendario_Scan}/>
          <Route path='/Calendario/Radiografia' exact Component={Calendario_Rad}/>
          <Route path='/Calendario/Ecografia' exact Component={Calendario_Eco}/>
          <Route path='/Calendario/Crear' exact Component={CreateHora}/>
          <Route path='/Calendario/Historial' exact Component={Historial}/>
          <Route path='/Perfil' exact Component={Perfil}/>
        </Routes>
      </div>
    </Router>
  )
}


