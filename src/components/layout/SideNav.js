import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const loggedInUser = JSON.parse(localStorage.loggedInUser);

  return (
    <div>
      <Nav vertical>
        <NavItem className="m-2">
          <NavLink to="/Dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem className="m-2">
          <NavLink to="/Conversations">Conversations</NavLink>
        </NavItem>
        <NavItem className="m-2">
          <NavLink to="/Friends">Manage Friends</NavLink>
        </NavItem>
        <NavItem className="m-2">
          {/* Update to load as the profile page for the logged in user */}
          <NavLink to={`/UserProfile/${loggedInUser.id}`}>User Profile</NavLink>
        </NavItem>
        <NavItem className="m-2">
          <NavLink to="/Settings">Settings</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SideNav;
