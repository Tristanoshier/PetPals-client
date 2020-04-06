import React from 'react';
import PostFeedIndex from './postFeed/PostFeedIndex';

type Props = {
    token: string
}

export default class Dashboard extends React.Component<Props> {

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <PostFeedIndex token={this.props.token} />
            </div>
        )
    }
}