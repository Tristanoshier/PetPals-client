import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom' 

const Navbar = (props: any) => {
  return (
    <div>
            <Nav>
        <NavItem>
          <NavLink href="#"><Link to="/dashboard">Dashboard</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><Link to="/search">Search</Link> </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><Link to="/profile">Profile</Link></NavLink>
        </NavItem>
      </Nav>
        {/* <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem> */}

      <hr />
      <Switch>
          <Route exact path="/dashboard"></Route>
          <Route exact path="/search"></Route>
          <Route exact path="/profile"></Route>
          <Route></Route>
      </Switch>
    </div>
  );
}

export default Navbar;