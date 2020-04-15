import React from 'react';
//Reactstrap
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//Material UI
import TextField from "@material-ui/core/TextField";
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton/IconButton';
import APIURL from '../../../../helpers/environment';

type Props = {
    petUpdate: any,
    updateOff: () => void,
    token: string,
    fetchPets: () => void
}

type State = {
    editName: string,
    editAnimal: string,
    editBio: string,
    editAdoption: boolean,
    file: string
}

export default class PetEdit extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editName: this.props.petUpdate.name,
            editAnimal: this.props.petUpdate.animal,
            editBio: this.props.petUpdate.bio,
            editAdoption: this.props.petUpdate.adoption,
            file: ""
        }
    }

    editPetPhoto = () => {
        const editPetPictureData = new FormData()
        editPetPictureData.append('image', this.state.file)
        fetch(`${APIURL}/pet/update/pet-pic/${this.props.petUpdate.id}`, {
            method: 'PUT',
            body: editPetPictureData,
            headers: new Headers({
                'Authorization': this.props.token
            })
        }) .then(res => res.json())
        .catch(err => console.log(err))
    }

    handlePetUpdate = (e: any) => {
        e.preventDefault();
        fetch(`${APIURL}/pet/update/${this.props.petUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: this.state.editName, animal: this.state.editAnimal, bio: this.state.editBio, adoption: this.state.editAdoption}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(() => {
            this.editPetPhoto();
        }).then(() => {
            this.props.fetchPets();
            this.props.updateOff();
            this.makeEditWork();
        })
    }

    makeEditWork = () => {
        setTimeout(() => {
            window.location.reload();
        }, 3000)
    }

    closeUpdateModal = () => {
        this.props.updateOff();
    }

    singleFileChangedHandler = (e: any) => {
        this.setState({
         file: e.target.files[0]
        });
    }

    render() {
        return (
            <>
                <Modal className="create-pet-modal" isOpen={true}>
                    <ModalHeader>Edit Pet<IconButton className="exit-btn" onClick={this.closeUpdateModal}><ClearIcon /></IconButton></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handlePetUpdate}>
                            <FormGroup>
                                <Label className ="caption" htmlFor="description">Is this pet up for adoption?</Label>
                                <br />
                                <Button className="yes-btn" color="primary" onClick={() => this.setState({ editAdoption: true })}>Yes</Button>
                                <Button className="no-btn" color="secondary" onClick={() => this.setState({ editAdoption: false })}>No</Button>
                            </FormGroup>
                            <FormGroup>
                                <TextField className="modal-text-field" value={this.state.editName} onChange={e => this.setState({ editName: e.target.value })} label="edit name"/>
                            </FormGroup>
                            <FormGroup>
                                <TextField className="modal-text-field" value={this.state.editAnimal} onChange={e => this.setState({ editAnimal: e.target.value })} label="edit animal"/>
                            </FormGroup>
                            <FormGroup>
                                <TextField className="modal-text-field" value={this.state.editBio} onChange={e => this.setState({ editBio: e.target.value })} label="edit bio"/>
                            </FormGroup>
                            <br />
                            <Button className="create-btn" type="submit">Make Changes</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}