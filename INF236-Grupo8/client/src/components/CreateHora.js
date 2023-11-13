import React, { Component } from 'react'
import axios from 'axios'

export default class CreateHora extends Component {

    state = {
        users: [],
        username: ''
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/calendario');
        this.setState({ users: res.data });
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async e => {
        const res = await axios.post('http://localhost:5000/calendario', {
            username: this.state.username
        })
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <h1 className='text-center'>Creación de horas</h1>
                </div>
                <div>
                    <div className='col-md-4 container p-2'>
                        <form onSubmit={this.onSubmit}>
                            <div className='card cardbody p-2'>
                                <label className="form-label">Nombre del paciente</label>
                                <div className='form-group mb-2'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        required
                                        onChange={this.onChangeUsername}
                                    />
                                </div>
                            </div>
                            <p></p>
                            <div className='card cardbody p-2'>
                                <label className="form-label">Rut del paciente</label>
                                <div className='row'>
                                    <div className='form-group mb-2 col-md-9'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            maxlength='8'
                                            required
                                            onChange={this.onChangeUsername}
                                        />
                                    </div>
                                    <div className='form-group mb-2 col-md-3'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            maxlength='1'
                                            placeholder="Dv"
                                            required
                                            onChange={this.onChangeUsername}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p></p>
                            <div className='card cardbody p-2'>
                                <label className="form-label">Tipo de hora</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required />
                                    <label className="form-check-label" for="inlineRadio1">Radiografía</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" required />
                                    <label className="form-check-label" for="inlineRadio2">Scanner</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" required />
                                    <label className="form-check-label" for="inlineRadio3">Ecografía</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" required />
                                    <label className="form-check-label" for="inlineRadio4">Resonancia</label>
                                </div>
                            </div>
                            <p></p>
                            <div className='card cardbody p-2'>
                                <label className="form-label">Fecha</label>
                                <div className="d-flex flex-row align-items-center mb-2">
                                    <i className="fa-lg fa-fw"></i>
                                    <div className="form-outline flex-fill">
                                        <input placeholder="Select date" name="Fsalida" type="date" id="Fsalida" class="form-control" format="yyyy/mm/dd" required />
                                    </div>
                                </div>
                            </div>
                            <p></p>
                            <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
