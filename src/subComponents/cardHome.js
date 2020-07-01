import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Color1 from '../images/color1.jpg';
import Color2 from '../images/color2.jpg';
import Color3 from '../images/color3.jpg';
import '../css/cardHome.scss';
class cardHome extends Component {
  state = {};
  render() {
    return (
      <div className="bodyCard">
        <Container fluid className="padding ">
          <Row className="text-center padding">
            <Col xs={12} sm={6} md={4}>
              <Card className="cardss">
                <Card.Img variant="top" className="cardssImage" src={Color1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="cardss" border="primary">
                <Card.Img variant="top" className="cardssImage" src={Color2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                  <Button variant="outline-primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col xs={12} md={4}>
              <Card className="cardss" border="success">
                <Card.Img variant="top" className="cardssImage" src={Color3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                  <Button variant="outline-success">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default cardHome;
