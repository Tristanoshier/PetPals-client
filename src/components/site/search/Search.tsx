import React from 'react';
import SearchBarDisplay from './SearchBarDisplay';
import { Container, Row, Col } from 'reactstrap';

type Props = {
    token: string,
    findAllUsers: () => void,
    allUsers: any
}

export default class Search extends React.Component<Props> {
    render() {
        return (
            <Container className="search">
                <SearchBarDisplay 
                        token={this.props.token} 
                        findAllUsers={this.props.findAllUsers}
                        allUsers={this.props.allUsers}
                    /> 
            </Container>
        )
    }
}