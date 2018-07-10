import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';

class App extends Component {
  
  componentDidMount () {
    const oauthScript = document.createElement("script");
    oauthScript.src ="https://cdnjs.cloudflare.com/ajax/libs/oauth-io/0.6.2/oauth.js";

    document.body.appendChild(oauthScript);
  }

  handleClick(e){
    e.preventDefault();
    window.OAuth.initialize('HUCYf6HaoJJsbmiDRyX_O1zSmBo');

    window.OAuth.popup('github').then((provider) => {
       provider.me().then((data) => {
        console.log("data: ", data);
        alert("Welcome " + data.name + "!");
       });

       provider.get('/user').then((data) => {
        console.log('self data: ', data);
       });
    });
  }


  render() {
    return (
      <div className="App">
        <a href="" onClick={this.handleClick.bind(this)} className="btn btn-social btn-github">
           <span className="fa fa-github"></span> Sign in with Github
        </a>
        <a href="" onClick={this.handleClick.bind(this)} className="btn btn-social btn-twitter">
           <span className="fa fa-twitter"></span> Sign in with Github
        </a>
        <a href="" onClick={this.handleClick.bind(this)} className="btn btn-social btn-google">
        <span className="fa fa-google"></span> Sign in with Github
     </a>
      </div>
    );
  }
}

export default App;
