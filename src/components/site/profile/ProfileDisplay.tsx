import React from "react";
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Container, Row, Col, Button } from "reactstrap";
import EditProfile from "./EditProfile";

type Props = {
  token: string
}

type State = {
  profileInfo: any,
  profileUpdate: any,
  profileUpdateActive: boolean
}

export default class ProfileDisplay extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      profileInfo: {},
      profileUpdate: {},
      profileUpdateActive: false
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

  updateProfile() {
    this.setState({
      profileInfo: this.state.profileUpdate
    })
  }
  
  updateOn(){
    this.setState({
      profileUpdateActive: true
    })
  }

  updateOff(){
    this.setState({
      profileUpdateActive: false
    })
  }

  render() {
    return (
      <Container>
        <Card>
          <Row>
              <Col md="4">
                <CardImg className="card-img" src={this.state.profileInfo.profileImg} alt="pet pic" />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle>{this.state.profileInfo.username}</CardTitle>
                  <CardSubtitle>{this.state.profileInfo.bio}</CardSubtitle>
                  <CardSubtitle>{this.state.profileInfo.adoptionRecruiter}</CardSubtitle>
                  <CardSubtitle>{this.state.profileInfo.contact}</CardSubtitle>
                  <br />
                  <Button onClick={() => {this.updateOn()}}>Edit Profile</Button>
                </CardBody>
                {this.state.profileUpdateActive ?
                  <EditProfile
                    profileInfo={this.state.profileInfo}

                    updateOff={this.updateOff.bind(this)}
                    token={this.props.token}
                    fetchMyProfile={this.fetchMyProfile.bind(this)} />
                    : <></>
                }
              </Col>
            </Row>
        </Card>
      </Container>
    );
  }
}
