import React from 'react';
import UserLogin from './UserLogin.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  };

  componentDidMount() {

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
    console.log('Login working...');
  };

  render() {
    return(
      <div>
        <h1>App Name</h1>
        <UserLogin handleUser={this.handleUser} handlePass={this.handlePass} handleLogin={this.handleLogin}  />
      </div>

    );
  };
};

export default App;