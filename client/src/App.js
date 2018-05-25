import React, { Component } from 'react';
import axios from 'axios';
import {TryAgainButton} from './style/style';

class App extends Component {
  state = {
    passwords: []
  }

  getPasswords = () => {
    axios.get('http://localhost:7000/api/passwords')
      .then(res => this.setState({passwords: res.data}))
        .catch(err => console.log(err));
  }
  
  render() {
    const {passwords} = this.state;
    
    let render = <div>
      <h1 style={{fontWeight:"normal", fontSize:"42px"}}>No passwords :</h1>
      <TryAgainButton onClick={this.getPasswords}>Try Again?</TryAgainButton>
    </div>
    
    if (passwords && passwords.length > 0) {
      render = <div>
        <h1 style={{fontWeight:"normal", fontSize:"42px"}}>{passwords.length} Passwords.</h1>
        <ul style={{listStyle: "none", padding:"0", fontSize:"32px", marginBottom:"2em"}}>
          {
            passwords.map((password, index) => <li key={index}>{password}</li>)
          }
        </ul>
        <TryAgainButton onClick={this.getPasswords}>Get More</TryAgainButton>
      </div>
    }

    return render;
  }
}

export default App;
