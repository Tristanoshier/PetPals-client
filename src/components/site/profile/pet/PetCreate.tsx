import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

type Props = {
    petCreate: any,
    fetchPets: () => void,
    token: string
}

type State = {
    name: string,
    animal: string,
    bio: string,
    adoption: boolean,
    petPicUrl: string
}
export default class PetCreate extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            name: "",
            animal: "",
            bio: "",
            adoption: false,
            petPicUrl: ""
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        if (this.state.name && this.state.bio && this.state.adoption && this.state.petPicUrl) {
            fetch(`http://localhost:3001/pet/create`, {
                method: 'POST',
                body: JSON.stringify({ name: this.state.name, animal: this.state.animal, bio: this.state.bio, adoption: this.state.adoption, petPicUrl: this.state.petPicUrl }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token
                })
            })
                .then((res) => res.json())
                .then(() => {
                    this.setState({
                        name: "",
                        animal: "",
                        bio: "",
                        adoption: false,
                        petPicUrl: ""
                    })
                    this.props.fetchPets();
                })
        } else {
            alert('Must add the name, bio, adoption status, and a picture of your pet')
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label htmlFor="petPicUrl">PetPicUrl:</Label>
                        <Input value={this.state.petPicUrl} onChange={e => this.setState({ petPicUrl: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="posturl">PostUrl:</Label>
                        <Input value={this.state.postUrl} onChange={e => this.setState({ postUrl: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="posturl">PostUrl:</Label>
                        <Input value={this.state.postUrl} onChange={e => this.setState({ postUrl: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="posturl">PostUrl:</Label>
                        <Input value={this.state.postUrl} onChange={e => this.setState({ postUrl: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Caption:</Label>
                        <Input value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
                    </FormGroup>
                    <Button type="submit">POST</Button>
                </Form>
            </Container>
        )
    }
}
