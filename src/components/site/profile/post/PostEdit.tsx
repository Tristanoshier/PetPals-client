
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
    postUpdate: any,
    updateOff: () => void,
    token: string,
    fetchPosts: () => void
}

type State = {
    editDescription: string
}

export default class PostEdit extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editDescription: this.props.postUpdate.description
        }
    }

    handlePostUpdate = () => {
        fetch(`${APIURL}/post/edit/${this.props.postUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ description: this.state.editDescription }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(() => {
            this.props.fetchPosts();
            this.props.updateOff();
        })
    }

    closeUpdateModal = () => {
        this.props.updateOff();
    }

    render() {
        return (
            <>
                <Modal className="create-pet-modal" isOpen={true}>
                    <ModalHeader>Edit Post<IconButton className="exit-btn-post-edit" onClick={this.closeUpdateModal}><ClearIcon /></IconButton></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handlePostUpdate}>
                            <FormGroup>
                                <TextField className="modal-text-field" value={this.state.editDescription} onChange={e => this.setState({ editDescription: e.target.value })} label="edit caption"/>
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