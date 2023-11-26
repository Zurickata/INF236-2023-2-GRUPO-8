import React, { Component } from "react";
import axios from "axios";

export default class Iniciar_sesion extends Component {
  state = {
    users: [],
    rut:'',
    dv: '',
    password: ''
  }
  
  async componentDidMount(){
    const res = await axios.get("http://localhost:5000/usuario");
    this.setState({ users: res.data});
  }

  onChangerut = (e) =>{ 
    this.setState({
      rut: e.target.value
    })
  }
  onChangedv = (e) =>{ 
    this.setState({
      dv: e.target.value
    })
  }
  onChangepassword = (e) =>{ 
    this.setState({
      password: e.target.value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    for (let i = 0; i < this.state.users.length ; i++){
      if (this.state.rut == this.state.users[i].rut && this.state.dv == this.state.users[i].dv && this.state.password == this.state.users[i].password){
        alert("Se ha iniciado sesión")
        return
      }
    }
    alert("No se ha podido iniciar sesión")
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="text-center p-2">Iniciar Sesión</h1>
          <div className="col-md-4 container p-2">
            <form onSubmit={this.onSubmit}>
              <div className="card cardbody p-2">
                <div className="row">
                  <div className="form-group mb-1 col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      maxLength="8"
                      placeholder="Rut"
                      required
                      value={this.state.rut}
                      onChange={this.onChangerut}
                    />
                  </div>
                  <div className="form-group mb-1 col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      maxLength="1"
                      placeholder="Dv"
                      required
                      value={this.state.dv}
                      onChange={this.onChangedv}
                    />
                  </div>
                </div>
              </div>
              <p></p>
              <div className="card cardbody p-2">
                <div className="row">
                  <div className="col">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      required
                      value={this.state.password}
                      onChange={this.onChangepassword}
                    />
                  </div>
                </div>
              </div>
              <p></p>
              <button type="submit" className="btn btn-primary btn-lg">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
