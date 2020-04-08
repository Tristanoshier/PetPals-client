import React from 'react'
//Reactstrap
import { Container, Row, Col, Button } from 'reactstrap';
//Components
import PostCreate from "./PostCreate";
import PostCards from './PostCards';
import PostEdit from './PostEdit';

type Props = {
    token: string;
}

type State = {
    myPosts: any,
    postUpdate: any,
    postCreate: any,
    updateActive: boolean
    postCreateActive: boolean
}

export default class PostIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            myPosts: [],
            postUpdate: {},
            postCreate: {},
            updateActive: false,
            postCreateActive: false
        }
    }
    fetchPosts = () => {
        fetch(`http://localhost:3001/post/find`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((postData) => {
                this.setState({
                    myPosts: postData.posts
                })
            })
    }

    componentWillMount() {
        this.fetchPosts()
    }

    editUpdateMyPosts = (post: any) => {
        this.setState({
            postUpdate: post
        })
    }

    editCreateMyPosts = (post: any) => {
        this.setState({
            postCreate: post
        })
    }

    updateOn = () => {
        this.setState({
            updateActive: true
        })
    }

    updateOff = () => {
        this.setState({
            updateActive: false
        })
    }

    createOff = () => {
        this.setState({
            postCreateActive: false
        })
    }

    createOn = () => {
        this.setState({
            postCreateActive: true
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <Button onClick={() => this.createOn()}>+</Button>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md="12">
                        {this.state.postCreateActive ?
                            <PostCreate
                            postCreate={this.state.postCreate}
                            fetchPosts={this.fetchPosts.bind(this)}
                            token={this.props.token}
                            createOff={this.createOff.bind(this)}
                            /> : <> </>}
                    </Col>
                    <Col md="12">
                        <PostCards
                            myPosts={this.state.myPosts}
                            editUpdateMyPosts={this.editUpdateMyPosts.bind(this)}
                            updateOn={this.updateOn.bind(this)}
                            fetchPosts={this.fetchPosts.bind(this)}
                            token={this.props.token}
                        />
                    </Col>
                    {this.state.updateActive ?
                        <PostEdit
                            postUpdate={this.state.postUpdate}
                            updateOff={this.updateOff.bind(this)}
                            token={this.props.token}
                            fetchPosts={this.fetchPosts.bind(this)}
                        />
                        : <></>}
                </Row>
            </Container>
        )
    }
}
