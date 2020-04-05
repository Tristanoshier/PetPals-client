import React from "react";
import {Col, Row, Card, CardImg, CardTitle, CardDeck, CardBody, Button, CardSubtitle} from "reactstrap";

type Props = {
    myPets: any,
    editUpdateMyPets: (pet: any) => void,
    updateOn: () => void,
    fetchPets: () => void,
    token: string
}

export default class PetCards extends React.Component<Props> {
    constructor(props: Props){
        super(props)
    }

    petDelete = (pet: any) => {
      fetch(`http://localhost:3001/pet/delete/${pet.id}`, {
          method: 'DELETE',
          headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': this.props.token
          })
      }).then(() => this.props.fetchPets())
  }

  petMapper = () => {
    let pets = this.props.myPets;

    return pets.map((pet: any, index: number) => {
      return (
        <Card key={index}>
          <Row>
            <Col md="4">
              <CardImg className="card-img" src={pet.petPicUrl} alt="pet pic" />
            </Col>
            <Col md="8">
              <CardBody>
                <CardTitle>{pet.name}</CardTitle>
                <CardSubtitle>{pet.animal}</CardSubtitle>
                <CardSubtitle>{pet.bio}</CardSubtitle>
                <br />
                <Button onClick={() => { this.props.editUpdateMyPets(pet); this.props.updateOn() }}>UPDATE</Button>
                <Button onClick={() => { this.petDelete(pet) }}>DELETE</Button>
              </CardBody>
            </Col>
          </Row>
        </Card>
      )
    })
  }

  render(){
    return (
      <CardDeck>
        {this.petMapper()}
      </CardDeck>
    )
  }
}
