import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./dashboard/Dashboard";
import Search from "./search/Search";
import Profile from "./profile/Profile";

type Props = {
    token: string
}

type State = {
    allUsers: any
}

export default class Routes extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            allUsers: []
        }
    }
    
    findAllUsers =() => {
        fetch('http://localhost:3001/user/find-all', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(res => res.json())
            .then((userData) => {
                this.setState({
                    allUsers: userData
                })
            })
    }


    render(){
        return (
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard token={this.props.token} />
          </Route>
          <Route exact path="/search">
            <Search 
                token={this.props.token} 
                findAllUsers={this.findAllUsers.bind(this)}
                allUsers={this.state.allUsers}
            />
          </Route>
          <Route exact path="/profile">
            <Profile token={this.props.token} />
          </Route>
          {/* <Route>
            <AnotherProfile token={this.props.token}/>
          </Route>  */}
        </Switch>
        )
    }
}




