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
  state = {  
      currentCategory:"",
  products:[],
  addToCard:[]
  }
//elemenmtin sebete elave olunmasi
addToCard = product =>{

  let cards=this.state.addToCard;
  const addedItem = cards.find(item=>item.product.id === product.id)
  //eger bir elemente birden cox bassaq onda elave olunmayacaq
  if(addedItem){
    addedItem.quantity+=1
  }
  else{
    cards.push({product:product,quantity:1});
  }
 
  this.setState({addToCard:cards})
}

//category uzre filterleme
 changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
this.filterProducts(category)
// this.getProducts(category.seoUrl)
  };
  filterProducts = (category) =>{
    let url = "http://localhost:3000/products"
    if(category){
url+= "?categoryId=" + category.id
// console.log(url)
    }

    fetch(url)
    .then(res=>res.json())
    .then(data=>this.setState({products:data}))
  }
  getProducts = (seoUrl) =>{
    let url = "http://localhost:3000/products"
    if(seoUrl){
      url += "/" + seoUrl
    }
    fetch(url)
    .then(res=>res.json())
    .then(data=>this.setState({products:data}))
  }
  componentDidMount(){
  this.filterProducts()
  }
  render(){
   let  categoryInfo = { title: "Category List" };
   let productInfo =  { title: "Product List" };
  return (
    <div>
      <Container>
        <Row>
          <Navi cards={this.state.addToCard} />
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
            data={this.state.products}
             getCurrentCategory={this.state.currentCategory}
            info={productInfo} 
            addToCard={this.addToCard}
            />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  )};
}

export default App;
