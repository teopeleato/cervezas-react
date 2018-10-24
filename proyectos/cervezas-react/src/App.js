import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Header from './Header'
import Aside from './Aside'
import CervezasList from './CervezasList'

let cervezas = [
  {
    nombre: 'Ambar'
  },
  {
    nombre: 'Mahou'
  },
]

console.log(cervezas)

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Aside />
        <div>
          <Header
            title="Buscador de cervezas"
            subtitle="Elije la cerveza que más te guste para ver sus características"
          />
          <CervezasList cervezas={cervezas}/>
        </div>
      </div>
    );
  }
}

export default App;
