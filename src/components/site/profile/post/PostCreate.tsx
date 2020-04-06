import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton/IconButton'

type Props = {
    postCreate: any,
    fetchPosts: () => void,
    token: string
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
                })
        } else {
            alert('Must add a caption to post')
        }
    }

    render() {
        return (
            <Container>
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
            </Container>
        )
    }
}
