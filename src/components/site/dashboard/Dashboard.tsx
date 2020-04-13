import React from 'react';
import PostFeedIndex from './postFeed/PostFeedIndex';

type Props = {
    token: string
}

export default class Dashboard extends React.Component<Props> {

    render() {
        return (
            <div className="dashboard">
                <PostFeedIndex token={this.props.token} />
            </div>
        )
    }
}