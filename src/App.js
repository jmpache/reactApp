import React, { Component } from 'react';
import logo from './pizza.png';
import navlogo from './navlogo.png';
import './App.css';
import AddPeopleForm from './components/AddPeopleForm';
import { personas, cantidad } from './people.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
        cantidad,
        personas
    }
    this.handleAddPerson = this.handleAddPerson.bind(this);
    this.changeCantidad = this.changeCantidad.bind(this);
    this.calcular = this.calcular.bind(this);
    this.dineroPorPersona = 0;
  }
  
  handleAddPerson(persona) {
    this.setState({
      personas: [...this.state.personas, persona]
    })
  }

  changeCantidad(cant){
    this.state.cantidad.push(cant);
    console.log(cantidad);
  }

  calcular(){
    document.getElementById("addPeopleShowPeopleButton").style.display = "none";
    let cantidadPersonas = 0;
    this.dineroPorPersona = 0;
    let totalGastado = 0;
    this.state.personas.map((persona, i) => {
      return (
        totalGastado = totalGastado + persona.dinero
      )
    })
    console.log(totalGastado);
    cantidadPersonas = this.state.cantidad[0];
    this.dineroPorPersona = totalGastado/cantidadPersonas;
    console.log(this.dineroPorPersona);
  }

  render() {
    console.log(this.dineroPorPersona);
    const personas = this.state.personas.map((persona, i) => {
      return (
          <div className="col-md-4">
              <div className="card mt-4">
                  <div className="card-title text-center mt-3">
                      <h3>{persona.nombre}</h3>
                  </div>
                  <div className="card-body">
                      $ {persona.dinero}
                  </div>
                  <div className="card-footer">
                      <button className="btn btn-danger">
                          Eliminar
                      </button>
                  </div>
              </div>
          </div>
      )
    });

    const personasCalculadas = this.state.personas.map((personasCalculadas, i) => {
      return (
        <tr scope="row">
          <td>{personasCalculadas.nombre}</td>
          <td>{personasCalculadas.dinero}</td>
          <td>{this.dineroPorPersona}</td>
        </tr>
      )
    });

    return (
      <div className="App">
        <nav>
          <img id="navlogo" src={navlogo} className="mb-2"/>
        </nav>
        <div className='container'>

          <div id="tabla">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Gastó</th>
                  <th scope="col">Cobra</th>
                  <th scope="col">Paga</th>
                </tr>
              </thead>
              <tbody>
                {personasCalculadas}
                <tr>
                  <td>
                    Los demas {cantidad - this.state.personas.length}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="addPeopleShowPeopleButton">
            <div className="row mt-4">
              <div className="col-md-3 text-center">
                <img src={logo} className="App-logo mb-4" />
                <AddPeopleForm onAddPerson={this.handleAddPerson} setCantidad={this.changeCantidad} />
              </div>
              <div className="col-md-8">
                  <div className="row">
                    { personas }
                  </div>
              </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3 text-center">
                    <button id="button3" className="btn btn-primary" onClick={this.calcular}>
                        SIGUIENTE
                    </button>
                </div>
            </div>    
          </div>
        </div>
      </div>
    );
  }
}

export default App;
