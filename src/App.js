import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume'
import Home from './components/pages/Home';
import ContactMe from './components/pages/ContactMe';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume' exact component={Resume}/>
          <Route path='/contact-me' exact component={ContactMe}/>
          <Route path='/projects' exact component={Projects}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
