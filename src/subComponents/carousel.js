import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Color1 from '../images/color1.jpg';
import Color2 from '../images/color2.jpg';
import Color3 from '../images/color3.jpg';
import '../css/carousel.scss';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
class CarouselPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container fluid className="bgOfCarousel">
          <Carousel>
            <Carousel.Item className="CarouselItem">
              <img className="d-block w-100" src={Color1} alt="First slide" />
              <Carousel.Caption>
                <h1 className="display-2 d-none d-md-block">Jakis tekst</h1>
                <h3>Jakis inny tekst</h3>
                <Button variant="outline-success" size="lg">
                  Button
                </Button>
                <Button variant="primary" size="lg">
                  Button
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="CarouselItem">
              <img className="d-block w-100" src={Color2} alt="First slide" />
              <Carousel.Caption>
                <h1 className="display-2 d-none d-md-block">Jakis tekst</h1>
                <h3>Jakis inny tekst</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="CarouselItem">
              <img className="d-block w-100" src={Color3} alt="First slide" />
              <Carousel.Caption>
                <h1 className="display-2 d-none d-md-block">Jakis tekst</h1>
                <h3>Jakis inny tekst</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default CarouselPage;
