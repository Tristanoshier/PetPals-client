import React from 'react';
//Reactstrap
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//Material UI
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import APIURL from '../../../../helpers/environment';


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
            fetch(`${APIURL}/pet/create`, {
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
                <Modal className="edit-post-modal" isOpen={true}>
                    <ModalHeader>Add Pet<IconButton className="exit-btn" onClick={this.closeCreateModal.bind(this)}><ClearIcon /></IconButton></ModalHeader>
                    <ModalBody >
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label className="choose-file" htmlFor="file">Choose a profile picture for your pet.</Label>
                                <Input type="file" onChange={this.singleFileChangedHandler} />
                            </FormGroup>
                            <FormGroup>
                                <Label className= "caption" htmlFor="description">Is this pet up for adoption?</Label>
                                <br />
                                <Button className="yes-btn" color="primary" onClick={() => this.setState({ adoption: true })}>Yes</Button>
                                <Button className="no-btn" color="secondary" onClick={() => this.setState({ adoption: false })}>No</Button>
                            </FormGroup>
                            <FormGroup>
                                <TextField value={this.state.name} onChange={e => this.setState({ name: e.target.value })} label="name" />
                            </FormGroup>
                            <FormGroup>
                                <TextField value={this.state.animal} onChange={e => this.setState({ animal: e.target.value })} label="animal" />
                            </FormGroup>
                            <FormGroup>
                                <TextField value={this.state.bio} onChange={e => this.setState({ bio: e.target.value })} label="bio"/>
                            </FormGroup>
                            <br />
                            <Button className="create-btn" type="submit">Add Pet +</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
