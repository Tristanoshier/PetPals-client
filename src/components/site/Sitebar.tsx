import React from "react";

//Reactstrap
import { Nav, NavItem, Button } from "reactstrap";

//React Router
import { Link } from "react-router-dom";

//Components
import Routes from './Routes';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';


type Props = {
  onClick: () => void;
  token: string
};

export default class Sitebar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="mx-md-5">
        <Nav className="py-md-3 position">
          <NavItem className="logo">
            <Link to="/dashboard">PetPals<FontAwesomeIcon icon={faDog} /></Link>
          </NavItem>
          <NavItem className="spacing">
            <Link to="/dashboard"><FontAwesomeIcon icon={faHome} /></Link>
          </NavItem>
          <NavItem className="spacing">
            <Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link>
          </NavItem>
          <NavItem className="spacing">
            <Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link>
          </NavItem>
          <NavItem className="log-out-bttn">
            <Button onClick={this.props.onClick}>Log out</Button>
          </NavItem>
        </Nav>
        <hr />
        <Routes token={this.props.token} />
      </div>
    );
  }
}