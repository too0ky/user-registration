import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (<Router basename={process.env.PUBLIC_URL}>
    <div className="App">
  <div className="header">
    <div className="header-text"><h3 className="h3-white">Dummy Heading</h3><br></br><br></br>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    </div>
    <div class="form"> 
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
      </div>
      </div>
    </div>
  </div>
    </Router>
  );
}

export default App;