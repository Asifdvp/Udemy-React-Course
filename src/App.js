import "./App.css";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { Container, Row, Col } from "reactstrap";
import React from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
 class App extends React.Component {
  state = {    currentCategory:""
  }
 changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
  };
  render(){
   let  categoryInfo = { title: "Category List" };
   let productInfo =  { title: "Product List" };
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            {" "}
            <CategoryList 
            getCurrentCategory={this.state.currentCategory}
            info={categoryInfo} 
            changeCategory = {this.changeCategory} />{" "}
          </Col>
          <Col xs="9">
            {" "}
            <ProductList 
             getCurrentCategory={this.state.currentCategory}
            info={productInfo} 
            />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  )};
}

export default App;
