import { Formulario } from "./components/Formulario";
import { Home } from "./components/Home";
import { useState } from "react";
import './App.css'

export default function App() {
  const [user, setUser] = useState([])

  return (
    <div className="App">
      {!user.length > 0 ? <Formulario setUser={setUser} /> : <Home user={user} setUser={setUser} />}
    </div>
  );
}


