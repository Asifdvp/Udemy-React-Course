import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <h1>{this.props.info.title}  --{this.props.getCurrentCategory}</h1>
    )
  }
}
