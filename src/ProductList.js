import React, { Component } from 'react'
import { Table} from 'react-bootstrap'

export default class ProductList extends Component {
  state={
    products:[]
  }

  // componentDidMount(){
  //  this.setState({products:this.props.data})
  // }
  render() {
    console.log(this.props.data)
    return (
      <div>
      <h1>{this.props.info.title}  --{this.props.getCurrentCategory}</h1>
    
<Table
>
  <thead>
    <tr>
      <th>
      categoryId
      </th>
      <th>
      productName
      </th>
      <th>
      quantityPerUnit
      </th>
      <th>
      unitPrice
      </th>
      <th>
      unitsInStock
      </th>
    </tr>
  </thead>
  <tbody>
    {this.props.data.map(product=>(
      <tr key={product.id}>
<td> {product.categoryId}</td>
<td> {product.productName}</td>
<td> {product.quantityPerUnit}</td>
<td> {product.unitPrice}</td>
<td> {product.unitsInStock}</td>

        </tr>
    ))}
 
  </tbody>
</Table>

       
        </div>
    )
  }
}