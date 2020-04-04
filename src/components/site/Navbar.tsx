import React from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Search from "./search/Search";
import Profile from "./profile/Profile";

type Props = {
  onClick: () => void;
  token : string
};
export default class Navbar extends React.Component<Props> {
  render(){
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="#">
            <Link to="/dashboard">Dashboard</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/search">Search</Link>{" "}
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/profile">Profile</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <Button onClick={this.props.onClick}>Log out</Button>
        </NavItem>
      </Nav>
      <hr />
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard token={this.props.token}/>
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/profile">
          <Profile token={this.props.token}/>
        </Route>
        <Route></Route>
      </Switch>
    </div>
  );
  }
}