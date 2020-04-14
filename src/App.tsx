import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Auth from './components/auth/Auth';
import Home from './components/site/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './css/main.css';


export default class App extends React.Component {

    state = {
      sessionToken: ""
    } 
  
  componentWillMount() {
    if(localStorage.getItem('token')){
      this.setState({
        sessionToken: localStorage.getItem('token')
      })
    }
  }
  
  updateToken(newToken: string){
    localStorage.setItem('token', newToken);
    this.setState({
      sessionToken: newToken
    });
  }

  clearToken(){
    localStorage.clear();
    this.setState({
      sessionToken: ""
    })
  }

  protectedViews = () => {
    return(this.state.sessionToken === localStorage.getItem('token') ? 
    <div>
        <Router>
          <Home clickLogout={this.clearToken.bind(this)} token={this.state.sessionToken}  />
        </Router>
    </div>
    : <Auth updateToken={this.updateToken.bind(this)} />)
  }

  render(){
    return (
      <div>
        {this.protectedViews()}
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous">
        </script>
      </div>
    );
  }
}


