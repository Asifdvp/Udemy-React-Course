import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ]

  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title} </h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.categoryId}
              action
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4> {this.props.getCurrentCategory}</h4>
      </div>
    );
  }
}
