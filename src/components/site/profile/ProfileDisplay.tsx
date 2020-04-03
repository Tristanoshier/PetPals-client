import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class ProfileDisplay extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
          <img src="https://images.unsplash.com/photo-1585474887977-94eb9b42d426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
          </Col>
          <Col xs="6">
            <h1>Welcome back, Taylor!</h1>
            <h3>Create your pets here</h3>
            <h3></h3>
          </Col>
          {/* <Col>.col</Col>
          <Col>.col</Col> */}
        </Row>
      </div>
    );
  }
}
