import React from 'react';
import PostFeedIndex from './postFeed/PostFeedIndex';
import Jeopardy from './individualComponents/tristan/Jeopardy'
import Joke from './individualComponents/taylor/Joke'
import BoredApiDisplay from './individualComponents/adam/boredapidisplay'

type Props = {
    token: string
}

export default class Dashboard extends React.Component<Props> {

    render() {
        return (
            <div className="dashboard">
                <PostFeedIndex token={this.props.token} />
                {/* <div className="personal-components">
                    <Jeopardy />
                    <BoredApiDisplay />
                    <Joke />
                </div> */}

            </div>
        )
    }
}