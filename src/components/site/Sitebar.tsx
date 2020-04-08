import React from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";
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