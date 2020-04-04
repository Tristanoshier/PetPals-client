import React from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import $ from 'jquery';


type Props = {

}

type State = {
    selectedFile : any
}

export default class EditProfile extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }


    render() {
        console.log(this.state.selectedFile)
        return (
            <Container>
                <h1>Profile</h1>
                
            </Container>
        )
    }
}