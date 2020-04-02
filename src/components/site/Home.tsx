import React from 'react';
import { Button } from 'reactstrap';

type Props = {
    clickLogout: () => void,
    token: string
}

export default class Home extends React.Component<Props> {
    render(){
        return (
            <div>
                <h1>Home</h1>
                <Button className="logout-btn" onClick={this.props.clickLogout}>Log out</Button>
            </div>
        )
    }
}