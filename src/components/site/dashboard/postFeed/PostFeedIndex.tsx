import React from 'react'

type Props = {
    token: string;
}

type State = {
    postCollection: string[],
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

    fetchPosts = () => {
        fetch(`http://localhost:3001/post/find/feed`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((postData) => {
                console.log(postData)
            })
    }

    componentWillMount() {
        this.fetchPosts()
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
