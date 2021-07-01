import './App.css';
import React from 'react';
import logo from './assets/bridgelogo.jpg';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'hello all'
        }
    }
    render() {
        return ( 
        <div>
           <h1> { this.state.title } </h1>
           <img src={logo}
           alt= 'bridgelabz logo' />
       </div>
        );
    }
}

export default App;