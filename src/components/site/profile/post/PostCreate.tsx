import React from 'react';
//Reactstrap
import { Button, Form, FormGroup, Label, Input, Container, Modal, ModalHeader, ModalBody } from 'reactstrap';
//Material UI
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

type Props = {
    postCreate: any,
    fetchPosts: () => void,
    token: string,
    createOff: () => void
}

type State = {
    description: string,
    postUrl: string
}

export default class PostCreate extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            description: "",
            postUrl: ""
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        if (this.state.description) {
            fetch(`http://localhost:3001/post/create`, {
                method: 'POST',
                body: JSON.stringify({ description: this.state.description, postUrl: this.state.postUrl }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token
                })
            })
                .then((res) => res.json())
                .then(() => {
                    this.setState({
                        description: '',
                        postUrl: ''
                    })
                    this.props.fetchPosts();
                    this.props.createOff();
                })
        } else {
            alert('Must add a caption to post')
        }
    }

    closeCreateModal = () => {
        this.props.createOff()
    }

    render() {
        return (
            <>
                <Modal isOpen={true}>
                    <ModalHeader>Create Post <IconButton onClick={this.closeCreateModal.bind(this)}><ClearIcon /></IconButton></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label htmlFor="posturl">PostUrl:</Label>
                                <Input value={this.state.postUrl} onChange={e => this.setState({ postUrl: e.target.value })} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="description">Caption:</Label>
                                <Input value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
                            </FormGroup>
                            <IconButton type="submit">Add<AddIcon /></IconButton>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
