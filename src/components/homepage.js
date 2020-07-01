import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import '../css/homepage.scss';
import CarouselPage from '../subComponents/carousel';
import Jumbotron from '../subComponents/jumbotronHome1';
import LowerJumbot from '../subComponents/belowJumbotronHome';
class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <CarouselPage />
        <Jumbotron />
        <LowerJumbot />
      </div>
    );
  }
}

export default Homepage;
