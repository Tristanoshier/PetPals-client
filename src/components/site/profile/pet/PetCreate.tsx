import React from 'react';
//Reactstrap
import { Button, Form, FormGroup, Label, Input, Container, Modal, ModalHeader, ModalBody } from 'reactstrap';
//Material UI
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ClearIcon from '@material-ui/icons/Clear';


type Props = {
    petCreate: any,
    fetchPets: () => void,
    token: string,
    createOff: () => void,
}

type State = {
    name: string,
    animal: string,
    bio: string,
    adoption: boolean,
    file: string
}

export default class PetCreate extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            name: "",
            animal: "",
            bio: "",
            adoption: false,
            file: ""
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        const petData = new FormData();
        petData.append('image', this.state.file)
        petData.append('name', this.state.name)
        petData.append('animal', this.state.animal)
        petData.append('bio', this.state.bio)
        petData.append('adoption', JSON.stringify(this.state.adoption))
        
        if (this.state.name && this.state.bio) {
            fetch(`http://localhost:3001/pet/create`, {
                method: 'POST',
                body: petData,
                headers: new Headers({
                    'Authorization': this.props.token
                })
            })
                .then((res) => res.json())
                .then(() => {
                    this.setState({
                        name: "",
                        animal: "",
                        bio: "",
                        adoption: false
                    })
                    this.props.fetchPets();
                    this.props.createOff();
                })
        } else {
            alert('Must add the name, bio, adoption status')
        }
    }

    singleFileChangedHandler = (e: any) => {
        this.setState({
         file: e.target.files[0]
        });
    }


    closeCreateModal = () => {
        this.props.createOff()
    }

    render() {
        return (
            <>
                <Modal isOpen={true}>
                    <ModalHeader>Create Pet<IconButton onClick={this.closeCreateModal.bind(this)}><ClearIcon /></IconButton></ModalHeader>
                    <ModalBody >
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label htmlFor="file">Please upload an image</Label>
                                <Input type="file" onChange={this.singleFileChangedHandler} />
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
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
