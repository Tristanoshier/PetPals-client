import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import PostCreate from './PostCreate';
import PostCards from './PostCards';
import PostEdit from './PostEdit';

type Props = {
    token: string;
}

type State = {
    myPosts: any,
    postUpdate: any,
    postCreate: any,
    updateActive: boolean,
    updateOn: boolean
}

export default class PostIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            myPosts: [],
            postUpdate: {},
            postCreate: {},
            updateActive: false,
            updateOn: false
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
                console.log(this.state.myPosts)
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

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="12">
                            <h2>Posts</h2>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md="12">
                            <PostCreate
                                postCreate={this.state.postCreate}
                                fetchPosts={this.fetchPosts.bind(this)}
                                token={this.props.token}
                            />
                        </Col>
                        <Col md="12">
                            <PostCards
                                myPosts={this.state.myPosts}
                                editUpdateMyPosts={this.editUpdateMyPosts.bind(this)}
                                updateOn={this.updateOn.bind(this)}
                                fetchPosts={this.fetchPosts.bind(this)}
                                token={this.props.token} />
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
            </div>
        )
    }
}
