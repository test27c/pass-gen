import React, { Component } from 'react';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {TryAgainButton, Advertisement} from './style/style';

class App extends Component {
  state = {
    passwords: [1,2,3,4,4]
  }

  getPasswords = () => {
    axios.get('api/passwords')
      .then(res => this.setState({passwords: res.data}))
        .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getPasswords()
  }
  
  render() {
    const {passwords} = this.state;
    
    let render = <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"5%"}}>
      <h1 style={{fontWeight:"normal", fontSize:"42px"}}>No passwords :</h1>
      <TryAgainButton onClick={this.getPasswords}>Try Again?</TryAgainButton>
    </div>
    
    if (passwords && passwords.length > 0) {
      render = <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"5%"}}>
        <h1 style={{fontWeight:"normal", fontSize:"44px"}}>{passwords.length} Passwords.</h1>
        {
          window.innerWidth <= 480 ?
          <Advertisement>Create password like <br />never same before...</Advertisement>        
          : 
        <Advertisement>Create password like never same before...</Advertisement>                  
        }
        <ul style={{listStyle: "none", padding:"0", fontSize:"32px", marginBottom:"2em"}}>
          {
            passwords.map((password, index) => <CopyToClipboard key={index} text={password}><li style={{paddingBottom: "3px", cursor:"pointer"}}onClick={() => alert('copied!')}>{password}</li></CopyToClipboard>)
          }
        </ul>
        <TryAgainButton onClick={this.getPasswords}>Generate</TryAgainButton>
        <Advertisement>Click hash to copy!</Advertisement>
      </div>
    }

    return render;
  }
}

export default App;
