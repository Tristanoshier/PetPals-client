
import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { render } from '@testing-library/react';
import { string } from 'prop-types';
import PostCreate from './PostCreate';
import PostEdit from './PostEdit'
import PostCards from './PostCards';

type Props = {
    token: string;
}

type State = {
    postCollection: [],
    description: string,
    postUrl: string,
    descriptionEdit: string,
    postUrlEdit: string
}

export default class PostIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            postCollection: [],
            description: "",
            postUrl: "",
            descriptionEdit: "",
            postUrlEdit: ""
        }
    }
    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3001/post/create`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((postData) => {
                this.props.postData.postCollection
            })
    }

    render() {
        return (
            <div>
                <PostCreate token={this.props.token} />
                <PostCards token={this.props.token} />
                <PostEdit token={this.props.token} />
            </div>
        )
    }
}
