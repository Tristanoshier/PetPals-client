import React from 'react';
import { Button, Card, CardDeck, CardImg, CardBody, CardSubtitle } from 'reactstrap';

type Props = {
    myPosts: any,
    editUpdateMyPosts: (post: any) => void,
    updateOn: () => void,
    fetchPosts: () => void,
    token: string
}

export default class PostCards extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    postDelete = (post: any) => {
        fetch(`http://localhost3001/post/delete/${post.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(() => this.props.fetchPosts())
    }

    postMapper = () => {
        let posts = this.props.myPosts;

        return posts.map((post: any, index: number) => {
            return (
                <Card key={index}>
                    <CardImg top width="100%" src="post.postUrl" alt="Card image cap" />
                    <CardBody>
                        <CardSubtitle>{post.description}</CardSubtitle>
                        <br />
                        <Button onClick={() => { this.props.editUpdateMyPosts(post); this.props.updateOn() }}></Button>
                        <Button onClick={() => { this.postDelete(post) }}>DELETE</Button>
                    </CardBody>
                </Card>
            )
        })
    }

    render() {
        return (
            <CardDeck>
                {this.postMapper()}
            </CardDeck>
        )
    }
}