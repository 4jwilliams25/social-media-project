import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  const clearStorage = () => {
    localStorage.removeItem("loggedInUser");
  };

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand className="text-white" href="/">
          notYourSpace.com
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink onClick={clearStorage} className="text-white" to="/">
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TopNav;
