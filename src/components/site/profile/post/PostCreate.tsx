import React from 'react';
//Reactstrap
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//Material UI
import TextField from "@material-ui/core/TextField";
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import APIURL from '../../../../helpers/environment';

type Props = {
    postCreate: any,
    fetchPosts: () => void,
    token: string,
    createOff: () => void
}

type State = {
    description: string,
    file: string
}

export default class PostCreate extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            description: "",
            file: ""
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        const postData = new FormData();
        postData.append('image', this.state.file)
        postData.append('description', this.state.description)
        if (this.state.description) {
            fetch(`${APIURL}/post/create`, {
                method: 'POST',
                body: postData,
                headers: new Headers({
                    'Authorization': this.props.token
                })
            })
                .then((res) => res.json())
                .then(() => {
                    this.setState({
                        description: ''
                    })
                    this.props.fetchPosts();
                    this.props.createOff();
                })
        } else {
            alert('Must add a caption to post')
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
                    <ModalHeader>Create Post <IconButton className="exit-btn-post" onClick={this.closeCreateModal.bind(this)}><ClearIcon /></IconButton></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="file">Choose an image for your post</Label>
                                <Input type="file" onChange={this.singleFileChangedHandler} />
                            </FormGroup>
                            <FormGroup>
                                <TextField value={this.state.description} onChange={e => this.setState({ description: e.target.value })} label="caption"/>
                            </FormGroup>
                            <br />
                            <Button className="create-btn" type="submit">Post</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}