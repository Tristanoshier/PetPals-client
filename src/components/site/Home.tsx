import React from 'react';
import { Button } from 'reactstrap';
import Navbar from './Navbar'

type Props = {
    clickLogout: () => void,
    token: string
}

export default class Home extends React.Component<Props> {
    render(){
        return (
            <div>
                <Button className="logout-btn" onClick={this.props.clickLogout}>Log out</Button>
                <Navbar />
            </div>
        )
    }
}