import React from "react";
//Reactstrap
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Container, Row, Col, Button, ModalHeader, ModalBody, Modal } from "reactstrap";
//Components
import EditProfile from "./EditProfile";
import ContactUser from './ContactUser';

type Props = {
  token: string
}

type State = {
  profileInfo: any,
  profileUpdate: any,
  profileUpdateActive: boolean,
  contactModal: boolean
}

export default class ProfileDisplay extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      profileInfo: {},
      profileUpdate: {},
      profileUpdateActive: false,
      contactModal: false
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

  contactModalOn() {
    this.setState({
      contactModal: true
    })
  }

  contactModalOff() {
    this.setState({
      contactModal: false
    })
  }

  
  render() {
    return (
      <Container>
        <Card>
          <Row>
              <Col md="4">
                <CardImg className="card-img" src={this.state.profileInfo.ProfileImg} alt="pet pic" />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle>{this.state.profileInfo.username}<Button onClick={() => {this.updateOn()}}>Edit Profile</Button></CardTitle>
                  <CardSubtitle>{this.state.profileInfo.bio}</CardSubtitle>
                  <CardSubtitle>{this.state.profileInfo.adoptionRecruiter}</CardSubtitle>
                  <br />
                  <CardSubtitle onClick={() => {this.contactModalOn()}}>Contact</CardSubtitle>
                  <br />
                 
                </CardBody>
                {this.state.profileUpdateActive ?
                  <EditProfile
                    profileInfo={this.state.profileInfo}
                    updateOff={this.updateOff.bind(this)}
                    token={this.props.token}
                    fetchMyProfile={this.fetchMyProfile.bind(this)} />
                    : <></>
                }
                {this.state.contactModal ?
                  <ContactUser 
                    profileInfo = {this.state.profileInfo}
                    contactModalOff={this.contactModalOff.bind(this)}
                    contactModal={this.state.contactModal}
                  /> : <></>

                }
              </Col>
            </Row>
        </Card>
      </Container>
    );
  }
}
