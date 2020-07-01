import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
class jumbotronHome1 extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Jumbotron>
              <div>
                <Col xs={12} sm={12} md={9} lg={9} xl={10}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Col>
              </div>
            </Jumbotron>
          </Row>
        </Container>
      </div>
    );
  }
}

export default jumbotronHome1;
