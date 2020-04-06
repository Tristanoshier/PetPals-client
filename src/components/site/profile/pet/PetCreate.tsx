import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
//Material UI
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton/IconButton';

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
        if (this.state.name && this.state.bio && this.state.petPicUrl) {
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
                        <Label htmlFor="name">Name:</Label>
                        <Input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="animal">Animal:</Label>
                        <Input value={this.state.animal} onChange={e => this.setState({ animal: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="posturl">Bio:</Label>
                        <Input value={this.state.bio} onChange={e => this.setState({ bio: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Adoption:</Label>
                        <Button color="primary" onClick={() => this.setState({ adoption: true })}>Yes</Button>
                        <Button color="secondary" onClick={() => this.setState({ adoption: false })}>No</Button>
                    </FormGroup>
                    <IconButton type="submit">Add<AddIcon /></IconButton>
                </Form>
            </Container>
        )
    }
}
