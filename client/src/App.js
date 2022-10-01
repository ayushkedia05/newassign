import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthenticationImage } from './components/login/login';
import Register from './components/login/register';



function App() {












  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Register} />
         
          <Route path='/sign-up' component={AuthenticationImage} />
          
          
           
  

        </Switch>
      </Router>
    </>
  );
}

export default App;
