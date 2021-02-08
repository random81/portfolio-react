import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import WebPaintings from './components/WebPainting';
import WebWitchcraft from './components/WebWitchcraft';
import webpaintIMG from '../images/webpaint.png';
import webGlobIMG from '../images/WEBGLOBE.png';
import logo from '../images/logo.png';
import homeSelectedIMG from '../images/home-selected.png';
import Home from './components/Home';

const App = (props) => {
  return (
      <div>
        <div id="wrapper">
          <Container>
            <Row>
              <Col md="12">
                <header>
                  <Navbar className="navColor" expand="lg">
                    <Navbar.Brand href="./"><img class="center-block" src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="./"><img class="center-block" src={homeSelectedIMG} alt="home" width="29" height="25" /><label>Home Castle</label></Nav.Link>
                        <Nav.Link href="./WebWitchcraft"><img class="center-block" src={webGlobIMG} alt="webWitchraft" width="29" height="25" /><label>Web Witchcraft</label></Nav.Link>
                        <Nav.Link href="./WebPaintings"><img class="center-block" src={webpaintIMG} alt="webPaintings" width="29" height="25" /><label>Web Paintings</label></Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </header>
              </Col>
            </Row>
          </Container>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/WebWitchcraft" component={WebWitchcraft} />
          <Route path="/WebPaintings" component={WebPaintings} />
        </Switch>
      </div>
  );
};
export default App;
