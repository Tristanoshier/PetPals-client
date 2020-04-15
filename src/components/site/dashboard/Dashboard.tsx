import React from 'react';
import PostFeedIndex from './postFeed/PostFeedIndex';
import Jeopardy from './individualComponents/tristan/Jeopardy'

type Props = {
    token: string
}

export default class Dashboard extends React.Component<Props> {

    render() {
        return (
            <div className="dashboard">
                 <PostFeedIndex token={this.props.token} />
                <div className="personal-components">
                    <Jeopardy /> 
                    {/* Adam call parent component here */}
                    {/* Taylor call parent component here */}
                </div>
               
            </div>
        )
    }
}