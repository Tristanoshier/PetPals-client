import React from 'react';
//Reactstrap
import { Card, CardImg, CardBody, CardSubtitle, CardDeck, Button } from 'reactstrap';
//Material UI
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton/IconButton';


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
        fetch(`http://localhost:3001/post/delete/${post.id}`, {
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
                    <CardImg top width="100%" src={post.postUrl} alt="Card image cap" />
                    <CardBody>
                        <CardSubtitle>{post.description}</CardSubtitle>
                        <br />
                        <IconButton onClick={() => { this.props.editUpdateMyPosts(post); this.props.updateOn() }}><CreateIcon /></IconButton>
                        <IconButton onClick={() => { this.postDelete(post) }}><ClearIcon /></IconButton>
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