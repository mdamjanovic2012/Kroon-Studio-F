/**
 * Created by milos on 02-Nov-18.
 */
/**
 * Created by milos on 02-Nov-18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


export default class NavbarComp extends Component {
     constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                  <NavbarBrand href="/">Kroon Studio</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink href="/logout" >Articles</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Categories</NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          Options
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>
                            <NavLink href="/logout">Logout</NavLink>
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Password Reset</NavLink>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
        )
    }
}

