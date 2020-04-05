import React from 'react';
import ProfileDisplay from './ProfileDisplay';
import PostIndex from './post/PostIndex';

type Props = {
    token: string
}

export default class Profile extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <ProfileDisplay token={this.props.token} />
                <PostIndex token={this.props.token}/>
            </div>
        )
    }
}