import React from 'react';
import { Container, Row, Col, Input, Form, Card, CardBody, CardTitle, CardImg, CardSubtitle } from 'reactstrap';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton/IconButton';
import APIURL from '../../../helpers/environment';


export default class SearchBarDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredUsers: [],
            profileInfo: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    componentDidMount() {
        this.fetchMyUserData()
        this.props.findAllUsers();
        this.filterUsers();
    }

    filterUsers = () => {
        let result = document.getElementById('search').value.toLowerCase();
        if (result === '') {
            this.setState({
                filteredUsers: []
            })
        } else {
            let filtered = this.props.allUsers.filter((user) => {
                if (user.username.toLowerCase().includes(result)) {
                    return user
                }
            })
            this.setState({
                filteredUsers: filtered
            })
            console.log(this.state.filteredUsers)
            console.log(this.props.allUsers)
        }
    }

    fetchMyUserData() {
        fetch(`${APIURL}/post/find`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
        }).then(res => res.json())
        .then((profileData) => {
            this.setState({
            profileInfo: profileData
            })
        }).catch(err => console.log(err))
    }


    deleteUserForAdmin = (user) => {
        fetch(`${APIURL}/user/delete/${user.username}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(() => {
            this.reloadPage();
            this.filterUsers();
        })
    }

    reloadPage(){
        setTimeout(() => {
            window.location.reload();
        }, 2000)
    }

    render() {
        const searchUserMapper = this.state.filteredUsers.map((user, index) =>
            <Card className="search-card" key={index}>
                <Row>
                    <Col className="mobile-search-img" md="4">
                        <CardImg className="search-img" src={user.ProfileImg} alt="profile pic" />
                    </Col>
                    <Col className="mobile-search-body" md="8">
                        <CardBody className="mobile-search-body">
                            <Row>
                                <Col className="mobile-search-info" md="6">
                                    <CardTitle className="search-username">{user.username}</CardTitle>
                                    <CardSubtitle>{user.bio}</CardSubtitle>
                                </Col>
                                <Col className= "search-user-body" md="6">
                                    {user.adoptionRecruiter ? 
                                    <p className="adoption-recruiter-search">adoption specialist</p>
                                    : <p className="adoption-recruiter-search">pet enthusiast</p>
                                    }
                                     <CardSubtitle>{user.contact}</CardSubtitle>
                                    {this.state.profileInfo.userType === 'Manager' ?
                                    <IconButton onClick={() => { this.deleteUserForAdmin(user) }}><ClearIcon /></IconButton>
                                    : <></>
                                    }
                                </Col>
                            </Row>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        )
        return (
            <Container className="search-container">
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <Form onSubmit={this.handleSubmit} id="form" autoComplete="off">
                            <Input className="search-form" onChange={this.filterUsers} id='search' type="text" placeholder="Search for a user..." />
                        </Form>
                    </Col>
                    <Col md="3"></Col>
                </Row>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <div className="search-box">
                            {searchUserMapper}
                        </div>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </Container>
        )
    }
}