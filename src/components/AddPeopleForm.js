import React, { Component } from 'react';
import './AddPeopleForm.css';

class AddPeopleForm extends Component {
    constructor() {
        super();
        this.state = {
            nombre: '',
            dinero: ''
        };
        this.handleInput = this.handleInput.bind(this); //enlazar el handle input con esta clase para que no pierda el scope
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCantidad = this.handleCantidad.bind(this);
        this.saveCantidad = this.saveCantidad.bind(this);
    }

    handleCantidad(e){
        this.cantidad = e.target.value;
        console.log(this.cantidad);
    }

    saveCantidad(e){
        e.preventDefault();
        this.props.setCantidad(this.cantidad);
        {
            document.getElementById("fg1").style.display = "block";
            document.getElementById("fg2").style.display = "block";
            document.getElementById("button2").style.display = "block";
            document.getElementById("button1").style.display = "none";
            document.getElementById("input1").style.display = "none";
            document.getElementById("button3").style.display = "block";
        }
    }


    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault(); // para no refrescar la pag
        this.props.onAddPerson(this.state);
    }

    render(){
        return(
            <div>
                <div className="card" id="card">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div id="input1">
                            <input
                            type="text"
                            name="cantidad"
                            className="form-control"
                            placeholder="Cantidad de participantes"
                            onChange={this.handleCantidad}
                            />
                        </div>
                        <div id="fg1" className="form-group">
                            <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="Nombre"
                            onChange={this.handleInput}
                            />
                        </div>
                        <div id="fg2" className="form-group">
                            <input
                            type="text"
                            name="dinero"
                            className="form-control"
                            placeholder="Dinero"
                            onChange={this.handleInput}
                            />
                        </div>
                        <p id="button1" className="btn btn-primary mt-3" onClick={this.saveCantidad}>
                            Siguiente
                        </p>
                        <button id="button2" type="submit" className="btn btn-primary ml-5">
                            Cargar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPeopleForm;