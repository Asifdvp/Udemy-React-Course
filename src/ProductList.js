import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

export default class ProductList extends Component {
  state = {
    products: [],
  };

  // componentDidMount(){
  //  this.setState({products:this.props.data})
  // }
  render() {
    return (
      <div>
        <h1>
          {this.props.info.title} --{this.props.getCurrentCategory}
        </h1>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>

              <th>Units In Stock</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((product) => (
              <tr key={product.id}>
                <td> {product.id}</td>
                <td> {product.productName}</td>
                <td> {product.unitPrice}</td>
                <td> {product.quantityPerUnit}</td>

                <td> {product.unitsInStock}</td>
                <td>
                  {" "}
                  <Button color="info">Add</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
