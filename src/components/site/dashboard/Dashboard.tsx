import React from 'react';
import PostFeedIndex from './postFeed/PostFeedIndex';

type Props = {
    token: string
}

export default class Dashboard extends React.Component<Props> {
<<<<<<< HEAD
    constructor(props: Props) {
        super(props)
    }

=======
    
>>>>>>> 40d7a9198b84f0be8d7a63cda904723c797cc37c
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <PostFeedIndex token={this.props.token}/>
            </div>
        )
    }
}