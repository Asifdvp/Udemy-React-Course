import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">NorthWind App</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options - {this.props.cards.length}
                </DropdownToggle>
                {this.props.cards.length !== 0 ? (
                  <DropdownMenu right>
                    {this.props.cards.map((card) => (
                      <DropdownItem key={card.product.id}>{card.product.productName} - {card.quantity} </DropdownItem>
                    ))}
                  </DropdownMenu>
                ) : (
                null
                )}





              </UncontrolledDropdown>
            </Nav>
          </Navbar>
        </Navbar>
      </div>
    );
  }
}
