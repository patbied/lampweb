import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/footer.scss';

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container fluid className="padding footerBox">
          <Row className="text-center padding">
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <a href="http://facebook.com" target="_blank">
                <i class="fab fa-facebook-f fa-3x"></i>
              </a>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <a href="https://myaccount.google.com/?tab=kk" target="_blank">
                <i class="fab fa-google-plus-g fa-3x"></i>
              </a>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <a href="https://instagram.com" target="_blank">
                <i class="fab fa-instagram fa-3x"></i>
              </a>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <a href="https://twitter.com" target="_blank">
                <i class="fab fa-twitter fa-3x"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
