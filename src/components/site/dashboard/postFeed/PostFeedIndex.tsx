import React from 'react'

type Props = {
    token: string;
}

export default class PostIndex extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
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

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
