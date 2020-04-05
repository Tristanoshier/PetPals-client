import React from "react";
import { Container, Row, Col } from 'reactstrap';
// import PetCards from "./PetCards";
import PetCreate from "./PetCreate";
// import PetEdit from './PetEdit';

type Props = {
  token: string;
}

type State = {
  myPets: any,
  petUpdate: any,
  petCreate: any,
  petUpdateActive: boolean

}

export default class PetIndex extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      myPets: [],
      petUpdate: {},
      petCreate: {},
      petUpdateActive: false
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

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h2>Pets</h2>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">
            <PetCreate
              petCreate={this.state.petCreate}
              fetchPets={this.fetchPets.bind(this)}
              token={this.props.token}
            />
          </Col>
          <Col md="12">
            <PetCards
              myPets={this.state.myPets}
              petCreate={this.state.petCreate}
              editUpdateMyPets={this.fetchPets.bind(this)}
              fetchPets={this.fetchPets.bind(this)}
              token={this.props.token}
            />
          </Col>
          {/* <Col md="12">
            <PetEdit
              petCreate={this.state.petCreate}
              fetchPets={this.fetchPets.bind(this)}
              token={this.props.token}
            />
          </Col> */}
        </Row>
      </Container>
    )
  }
}
