import React from "react";
import {
    Col,
    Row,
    Card,
    CardImg,
    CardBody,
    CardSubtitle,
    Container,
    CardHeader
} from "reactstrap";
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton/IconButton';


type Props = {
    token: string;
};

type State = {
    myFeed: any,
    profileInfo: any
};

export default class PostIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            myFeed: [],
            profileInfo: {}
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

    fetchMyUserData() {
        fetch('http://localhost:3001/post/find', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
        }).then(res => res.json())
        .then((profileData) => {
            this.setState({
            profileInfo: profileData
            })
        }).catch(err => console.log(err))
    }

    componentWillMount() {
        this.fetchMyUserData();
        this.fetchPosts();
    }

    postDelete = (feed: any) => {
        fetch(`http://localhost:3001/post/delete/${feed.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(() => {
            this.fetchPosts()
        })
    }

    createDate(feed: any) {
        let date = new Date(feed.createdAt)
        return date.toDateString()
    }

   


    feedMapper = () => {
        let feed = this.state.myFeed.reverse();
       
        return feed.map((feed: any, index: number) => {
           
            return (
                <Card className="feed-card" key={index}>
                    <CardHeader className="post-feed-header"><img className="feed-profile" src={feed.userProfile} alt="profile image" />{feed.username}<p className="post-date">{this.createDate(feed)}</p></CardHeader>
                    <CardImg className="post-image" top width="100%" src={feed.postUrl} alt="Card image cap" />
                    <CardBody className="post-feed-body">
                    <CardSubtitle className="post-text"><p className="post-profile-username">{feed.username}</p><p>{feed.description}</p></CardSubtitle>
                        {this.state.profileInfo.userType === 'Manager' ?
                                <IconButton onClick={() => { this.postDelete(feed) }}><ClearIcon /></IconButton>
                                : <></>
                            }
                    </CardBody>
                </Card>
            );
        });
    };


    render() {
        return (
            <Container>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">{this.feedMapper()}</Col>
                    <Col md="3"></Col>
                </Row>
            </Container>
        );
    }
}
