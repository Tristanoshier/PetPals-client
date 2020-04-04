import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

type Props = {
    postUpdate: any,
    updateOff: () => void,
    fetchPosts: () => void,
    token: string
}

type State = {
    editPostUrl: string,
    editDescription: string
}

export default class PostEdit extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editPostUrl: this.props.postUpdate.postUrl,
            editDescription: this.props.postUpdate.description
        }
    }

    handlePostUpdate = () => {
        fetch(`http://localhost3001/post/edit/${this.props.postUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ postUrl: this.state.editPostUrl, description: this.state.editDescription }),
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
                <Modal isOpen={true}>
                    <ModalHeader>Edit Post<Button onClick={this.closeUpdateModal}>X</Button></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handlePostUpdate}>
                            <FormGroup>
                                <Label htmlFor="postUrl">PostUrl:</Label>
                                <Input value={this.state.editPostUrl} onChange={e => this.setState({ editPostUrl: e.target.value })} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="description">Caption:</Label>
                                <Input value={this.state.editDescription} onChange={e => this.setState({ editDescription: e.target.value })} />
                            </FormGroup>
                            <Button type="submit">UPDATE</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
