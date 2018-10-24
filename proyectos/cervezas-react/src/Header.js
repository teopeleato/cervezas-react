import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header'

export class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <header className="header">
        <h1>{this.props.title}</h1>
        {this.props.subtitle && <p>{this.props.subtitle}</p>}
      </header>
    )
  }
}

export default Header
