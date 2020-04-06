import React from "react";
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap";

type Props = {
  token: string
}

type State = {
  profileInfo: any
}

export default class ProfileDisplay extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      profileInfo: {}
    }
  }

  fetchMyProfile() {
    fetch('http://localhost:3001/post/find', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    }).then(res => res.json())
      .then((profileData) => {
        console.log(profileData)
        this.setState({
          profileInfo: profileData
        })
      }).catch(err => console.log(err))
  }

  componentWillMount() {
    this.fetchMyProfile()
  }

  render() {
    return (
      <Container>
        <Card>
          <Row>
              <Col md="4">
                <CardImg className="card-img" src={""} alt="pet pic" />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle>{this.state.profileInfo.username}</CardTitle>
                  <CardSubtitle>{this.state.profileInfo.bio}</CardSubtitle>
                  <CardSubtitle>{this.state.profileInfo.adoptionRecruiter}</CardSubtitle>
                </CardBody>
              </Col>
            </Row>
        </Card>
      </Container>
    );
  }
}
