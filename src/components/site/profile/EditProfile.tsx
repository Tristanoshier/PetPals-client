import React from 'react';
import { Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup, Button } from 'reactstrap';

type Props = {
    profileInfo: any,
    updateOff: () => void,
    token: string,
    fetchMyProfile: () => void,
}

type State = {
    editUsername: string, 
    editAdoptionRecruiter: boolean,
    editBio: string,
    editContact: string,
    editProfileImg: string
}

export default class EditProfile extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state ={
            editUsername: this.props.profileInfo.username,
            editAdoptionRecruiter: this.props.profileInfo.adoptionRecruiter,
            editBio: this.props.profileInfo.bio,
            editContact: this.props.profileInfo.contact,
            editProfileImg: this.props.profileInfo.profileImg
        }
    }

    handleProfileUpdate = () => {
        fetch(`http://localhost:3001/user/update/${this.props.profileInfo.username}`, {
            method: 'PUT',
            body: JSON.stringify({username: this.state.editUsername, adoptionRecruiter: this.state.editAdoptionRecruiter, bio: this.state.editBio, contact: this.state.editContact, profileImg: this.state.editProfileImg}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(() => {
            this.props.fetchMyProfile();
            this.props.updateOff();
        })
    }

    closeUpdateModal = () => {
        this.props.updateOff();
    }


    render(){
        return (
           <>
           <Modal isOpen={true}>
            <ModalHeader>Edit Profile<Button onClick={this.closeUpdateModal}>X</Button></ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleProfileUpdate}>
                    <FormGroup>
                        <Label for="username">Username:</Label>
                        <Input value={this.state.editUsername} onChange={(e) => this.setState({editUsername: e.target.value})} />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Label for="adoption recruiter">Adoption Recruiter:</Label>
                        <Button color="primary" onClick={() => this.setState({editAdoptionRecruiter: true})}>Yes</Button>
                        <Button color="secondary" onClick={() => this.setState({editAdoptionRecruiter: false})}>No</Button>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bio">Bio:</Label>
                        <Input value={this.state.editBio} onChange={e => this.setState({
                            editBio: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact">Contact:</Label>
                        <Input value={this.state.editContact} onChange={e => this.setState({
                            editContact: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="profileImg">Profile Image:</Label>
                        <Input value={this.state.editProfileImg} onChange={e => this.setState({editProfileImg: e.target.value})} />
                    </FormGroup>
                    <br />
                    <Button type="submit">Update</Button>
                </Form>
            </ModalBody>    
           </Modal>
        </>    
        )
    }
}