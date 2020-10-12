import React from 'react';
import './App.css';
import Login from './Components/Login'
import RegisterNewAccount from './Components/RegisterNewAccount'
import { Route } from 'react-router-dom';
import WorkInProgress from './Components/WorkInProgress';

class App extends React.Component {
  render() {
    return (
      // adding react router paths
      <div className="App">
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registration" component={RegisterNewAccount}/>
        <Route exact path="/wip" render = {() => <WorkInProgress/>}/>
      </div>
      );
  }
}

export default App;
