import React from 'react';
import { Container, Row, Col, Input, Form, Card, CardBody, CardTitle, CardImg } from 'reactstrap';


export default class SearchBarDisplay extends React.Component {
    constructor(props){
        super(props);
        this.setState({
            filteredUsers: []
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    componentDidMount(){
        this.props.findAllUsers();
        this.filterUsers();
    }

    filterUsers = () => {
        let result = document.getElementById('search').value.toLowerCase();
        if(result === ''){
            this.setState({
                filteredUsers: []
            })
        }else{
            let filtered = this.props.allUsers.filter((user) => {
                if(user.username.toLowerCase().includes(result)) {
                    return user
                }
            })
            this.setState({
                filteredUsers: filtered
            })
            console.log(this.state.filteredUsers)
           
        }
    }

    mapFilteredUsers = () => {
        console.log(this.state.filteredUsers)
        // this.state.filteredUsers.map((user, index) => {
        //     return (
        //         <Card key={index}>
        //         <Row>
        //           <Col md="4">
        //             <CardImg className="card-img" src={user.profileImg} alt="profile pic" />
        //           </Col>
        //           <Col md="8">
        //             <CardBody>
        //               <CardTitle>{user.username}</CardTitle>
        //             </CardBody>
        //           </Col>
        //         </Row>
        //       </Card>
        //     )
        // })
    }


    render(){
        return (
            <Container>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <Form onSubmit={this.handleSubmit} id="form" autoComplete="off">
                            <Input onChange={this.filterUsers} id='search' type="text" placeholder="Search" />
                        </Form>
                    </Col>
                    <Col md="3"></Col>
                </Row>
                <Row>
                <Col md="3"></Col>
                <Col md="6">
                  {/* {this.mapFilteredUsers()} */}
                </Col>
                <Col md="3"></Col>
                </Row>
            </Container>
        )
    }
}