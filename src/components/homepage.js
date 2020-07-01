import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import '../css/homepage.scss';
import CarouselPage from '../subComponents/carousel';
import Jumbotron from '../subComponents/jumbotronHome1';
import LowerJumbot from '../subComponents/belowJumbotronHome';
import HomeCards from '../subComponents/cardHome';
import Footer from '../subComponents/footer';
class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <CarouselPage />
        <Jumbotron />
        <LowerJumbot />
        <HomeCards />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
