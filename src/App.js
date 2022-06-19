import "./App.css";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { Container,Row,Col } from "reactstrap";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
function App() {
 let  categoryInfo = {title:"Category List"};
 let  productInfo = {title: "Product List"};
  return (
    <div>
      <Container>
        <Row>
          <Navi/>
        </Row>
<Row> 
<Col xs="3"> <CategoryList  info={categoryInfo} /> </Col>
<Col xs="9">  <ProductList info={productInfo}  />  </Col>
  
  
  </Row>
      
         
        
      </Container>
    </div>
  );
}

export default App;
