import React from "react";
//Reactstrap
import { Container, Row, Col, Button } from 'reactstrap';
//Components
import PetCreate from "./PetCreate";
import PetCards from "./PetCards";
import PetEdit from './PetEdit';



type Props = {
  token: string;
}

type State = {
  myPets: any,
  petUpdate: any,
  petCreate: any,
  petUpdateActive: boolean
  petCreateActive: boolean
}

export default class PetIndex extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      myPets: [],
      petUpdate: {},
      petCreate: {},
      petUpdateActive: false,
      petCreateActive: false
    }
  }
  fetchPets = () => {
    fetch(`http://localhost:3001/pet/find`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': this.props.token
      })
    })
      .then(res => res.json())
      .then(petData => {
        this.setState({
          myPets: petData.pets
        })
        console.log(this.state.myPets)
      })
  }


  componentWillMount() {
    this.fetchPets()
  }

  editUpdateMyPets = (pet: any) => {
    this.setState({
      petUpdate: pet
    })
  }

  editCreateMyPets = (pet: any) => {
    this.setState({
      petCreate: pet
    })
  }

  updateOn = () => {
    this.setState({
      petUpdateActive: true
    })
  }

  updateOff = () => {
    this.setState({
      petUpdateActive: false
    })
  }

  createOff = () => {
    this.setState({
      petCreateActive: false
    })
  }

  createOn = () => {
    this.setState({
      petCreateActive: true
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <Button className="primary-btn" onClick={() => this.createOn()}>Create a Pet +</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">

            {this.state.petCreateActive ?
              <PetCreate
                petCreate={this.state.petCreate}
                fetchPets={this.fetchPets.bind(this)}
                token={this.props.token}
                createOff={this.createOff.bind(this)}
              /> : <></>}
          </Col>
          <Col md="12">
            <PetCards
              myPets={this.state.myPets}
              editUpdateMyPets={this.editUpdateMyPets.bind(this)}
              updateOn={this.updateOn.bind(this)}
              fetchPets={this.fetchPets.bind(this)}
              token={this.props.token}
            />
          </Col>
          {this.state.petUpdateActive ?
            <PetEdit
              petUpdate={this.state.petUpdate}
              updateOff={this.updateOff.bind(this)}
              token={this.props.token}
              fetchPets={this.fetchPets.bind(this)}
            />
            : <></>
          }
        </Row>
      </Container>
    )
  }
}
