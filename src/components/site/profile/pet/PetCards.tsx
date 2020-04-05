import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardText, CardDeck, CardBody, Button } from "reactstrap";


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

  petDelete = (pett: any) => {
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

    return pets.map((pets: any, index: number) => {
      return (
        <Card key={index}>

        </Card>
      )
    })
  }
}