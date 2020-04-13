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
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



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
      <div>
        <Nav className="py-md-3 nav-look">
          <NavItem className="logo">
            <Link to="/dashboard" className="logo-styled">PetPals<FontAwesomeIcon icon={faDog} /></Link>
          </NavItem>
          <NavItem className="spacing">
            <Link to="/dashboard" className="link-styled"><FontAwesomeIcon icon={faHome} size="lg" /></Link>
          </NavItem>
          <NavItem className="spacing">
            <Link to="/search" className="link-styled"><FontAwesomeIcon icon={faSearch} size="lg" /></Link>
          </NavItem>
          <NavItem className="spacing">
            <Link to="/profile" className="link-styled"><FontAwesomeIcon icon={faUser} size="lg" /></Link>
          </NavItem>
          <NavItem className="log-out-bttn">
            <Button className="log-button" onClick={this.props.onClick}>Log out <FontAwesomeIcon icon={faSignOutAlt} /></Button>
          </NavItem>
        </Nav>
        <br />
        <Routes token={this.props.token} />
      </div>
    );
  }
}