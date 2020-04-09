import React from 'react';
import { Container, Row, Col, Input, Form, Card, CardBody, CardTitle, CardImg, CardSubtitle } from 'reactstrap';


export default class SearchBarDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filteredUsers: []
        }
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

    render(){
            const petMapper = this.state.filteredUsers.map((user, index) => 
                <Card key={index}>
                    <Row>
                      <Col md="4">
                        <CardImg className="search-img" src={user.ProfileImg} alt="profile pic" />
                      </Col>
                      <Col md="8">
                        <CardBody>
                          <CardTitle>{user.username}</CardTitle>
                          <CardSubtitle>{user.bio}</CardSubtitle>
                          <CardSubtitle>Contact</CardSubtitle>
                        </CardBody>
                      </Col>
                    </Row>
                </Card>
            )
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
                  {petMapper}
                </Col>
                <Col md="3"></Col>
                </Row>
            </Container>
        )
    }
}