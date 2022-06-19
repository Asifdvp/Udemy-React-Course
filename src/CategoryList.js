import React, { Component } from 'react'
import { ListGroup,ListGroupItem} from 'reactstrap'
export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title} </h3>
<ListGroup>
  <ListGroupItem 
  action
      href="#"
      tag="a">
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem 
  action
      href="#"
      tag="a">
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem 
  action
      href="#"
      tag="a">
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem 
  action
      href="#"
      tag="a">
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem 
  action
      href="#"
      tag="a">
    Cras justo odio
  </ListGroupItem>

</ListGroup>
        </div>
    )
  }
}
