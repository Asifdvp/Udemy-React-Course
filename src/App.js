import "./App.css";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { Container, Row } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          {" "}
          <Navi />{" "}
        </Row>
        <Row>
          {" "}
          <ProductList />
          <CategoryList />{" "}
        </Row>
      </Container>
    </div>
  );
}

export default App;
