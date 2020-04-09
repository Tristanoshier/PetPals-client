import React from "react";
import {
    Col,
    Row,
    Card,
    CardImg,
    CardTitle,
    CardDeck,
    CardBody,
    Button,
    CardSubtitle,
    Container,
    CardHeader
} from "reactstrap";

type Props = {
    token: string;
};

type State = {
    myFeed: any;
};

export default class PostIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            myFeed: []
        };
    }

    fetchPosts = () => {
        fetch(`http://localhost:3001/post/find/feed`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.token
            })
        })
            .then(res => res.json())
            .then(postData => {
                this.setState({
                    myFeed: postData
                });
            });
            console.log(this.state.myFeed)
    };

    componentWillMount() {
        this.fetchPosts();
    }

    feedMapper = () => {
        let feed = this.state.myFeed;

        return feed.map((feed: any, index: number) => {
            return (
                <Card className="feed-card" key={index}>
                    <CardHeader><img className="feed-profile" src={feed.userProfile} alt="profile image"/>{feed.username}</CardHeader>
                    <CardImg className="post-image" top width="100%" src={feed.postUrl} alt="Card image cap" />
                    <CardBody>
                        <CardSubtitle>{feed.description}</CardSubtitle>
                    </CardBody>
                </Card>
            );
        });
    };

    render() {
        console.log(this.state.myFeed)
        return (
            <Container>
                <Row>
                    <Col md ="3"></Col>
                    <Col md="6">{this.feedMapper()}</Col>
                    <Col md ="3"></Col>
                </Row>
            </Container>
        );
    }
}
