import React from 'react';
import axios from 'axios';
import UserLogin from './UserLogin.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isVerifiedUser: false,
      currentUser: null,
    }

    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  };

  componentDidMount() {
    //get data for news, update info, and/or components not requiring user login...
  };

  componentDidUpdate() {

  };

  handleUser(e) {
    this.setState({
      username: e.target.value,
    });
  };

  handlePass(e) {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin(e) {
    console.log(this.state.username, this.state.password)
    axios.post('http://localhost:3000/newUser', ({ username: this.state.username, password: this.state.password }))
  };

  render() {
    if (this.state.isVerifiedUser === false) {
      return(
        <div>
          <h1>App Name</h1>
          <UserLogin handleUser={this.handleUser} handlePass={this.handlePass} handleLogin={this.handleLogin}  />
        </div>

      );
    }
  };
};

export default App;