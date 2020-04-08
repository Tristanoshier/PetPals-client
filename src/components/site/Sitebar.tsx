import React from "react";
//Reactstrap
import { Nav, NavItem, NavLink, Button } from "reactstrap";
//React Router
import { Route, Link, Switch } from "react-router-dom";
//Components
import Dashboard from "./dashboard/Dashboard";
import Search from "./search/Search";
import Profile from "./profile/Profile";
import Routes from './Routes';
import EditProfile from "./profile/EditProfile";

type Props = {
  onClick: () => void;
  token: string
};

export default class Sitebar extends React.Component<Props> {
  constructor(props: Props){
    super(props);
  }

  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <Link to="/dashboard">Dashboard</Link>
          </NavItem>
          <NavItem>
              <Link to="/search">Search</Link>
          </NavItem>
          <NavItem>
            <Link to="/profile">Profile</Link>
          </NavItem>
          <NavItem>
            <Button onClick={this.props.onClick}>Log out</Button>
          </NavItem>
        </Nav>
        <hr />
        <Routes token={this.props.token}/>
      </div>
    );
  }
}