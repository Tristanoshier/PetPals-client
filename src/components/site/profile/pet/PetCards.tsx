import React from "react";
//Reactstrap
import { Col, Row, Card, CardImg, CardTitle, CardDeck, CardBody, CardSubtitle } from "reactstrap";
//Material UI
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton/IconButton';
import APIURL from '../../../../helpers/environment';

type Props = {
  myPets: any,
  editUpdateMyPets: (pet: any) => void,
  updateOn: () => void,
  fetchPets: () => void,
  token: string
}

export default class PetCards extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  petDelete = (pet: any) => {
    fetch(`${APIURL}/pet/delete/${pet.id}`, {
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
        <Card key={index} className="pet-card">
          <Row>
            <Col md="4">
              <CardImg className="pet-profile-img" src={pet.petPicUrl} alt="pet pic" />
            </Col>
            <Col md="8">
              <CardBody className="pet-card-body">
                <Row>
                  <Col className="pet-info" md="9">
                    <CardTitle className="pet-title">{pet.name}{pet.adoption ?
                      <p className="adoption-label">up for adoption</p>
                      : <p className="adoption-label">happily owned</p>
                    }
                    </CardTitle>

                    <CardSubtitle>{pet.bio}</CardSubtitle>
                  </Col>
                  <Col className="pet-btn" md="3">
                    <IconButton className="pet-create-buttn" onClick={() => { this.props.editUpdateMyPets(pet); this.props.updateOn() }}><CreateIcon /></IconButton>
                    <IconButton className="pet-clear-buttn" onClick={() => { this.petDelete(pet) }}><ClearIcon className="pet-clear-buttn" /></IconButton>
                  </Col>
                </Row>
              </CardBody>
            </Col>
          </Row>
        </Card>
      )
    })
  }

  render() {
    return (
      <CardDeck>
        <Col md="3"></Col>
        <Col md="6">{this.petMapper()}</Col>
        <Col md="3"></Col>
      </CardDeck>
    )
  }
}
