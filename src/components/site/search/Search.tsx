import React from 'react';
import SearchBarDisplay from './SearchBarDisplay';

type Props = {
    token: string,
    findAllUsers: () => void,
    allUsers: any
}

export default class Search extends React.Component<Props> {
    render() {
        return (
            <div>
                <SearchBarDisplay 
                    token={this.props.token} 
                    findAllUsers={this.props.findAllUsers}
                    allUsers={this.props.allUsers}
                />
            </div>
        )
    }
}