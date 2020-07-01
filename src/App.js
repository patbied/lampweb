import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/navbar';
import About from './components/About';
import Home from './components/homepage';
import Gallery from './components/gallery';
import Footer from './subComponents/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Gallery" component={Gallery} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
