import React from 'react';
import UserLogin from './UserLogin.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <h1>App Name</h1>
        <UserLogin />
      </div>

    );
  };
};

export default App;