import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/Signup';
import Products from './components/pages/Products';
import Services from './components/pages/Services'
import Home from './components/pages/Home';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/react-personal-website' exact component={Home} />
          <Route path='/react-personal-website/services' exact component={Services}/>
          <Route path='/react-personal-website/sign-up' exact component={SignUp}/>
          <Route path='/react-personal-website/products' exact component={Products}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
