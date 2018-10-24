import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CervezasList extends Component {  

  static propTypes = {
    cervezas: PropTypes.array
  }

  render() {    
    return (
      <div>
          {this.props.cervezas.map((cerveza) => <p>{cerveza.nombre}</p>)}
      </div>
    )
  }
}
