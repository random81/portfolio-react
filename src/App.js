import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import React from 'react';
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

const App = () => {
  return (
    <div>
      <div id="wrapper">
        <Container>
          <Row>
            <Col md="12">
              <header>
                <Navbar className="navColor" expand="lg">
                  <Navbar.Brand href="./"><img className="center-block" src={logo} alt="logo" /></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Link to="./">
                        <img className="center-block" src={homeSelectedIMG} alt="home" width="29" height="25" />
                        <span>Home Castle</span>
                      </Link>
                      <Link to="./webwitchcraft">
                        <img className="center-block" src={webGlobIMG} alt="webWitchraft" width="29" height="25" />
                        <span>Web Witchcraft</span>
                      </Link>
                      <Link to="./webpaintings">
                        <img className="center-block" src={webpaintIMG} alt="webPaintings" width="29" height="25" />
                        <span>Web Paintings</span>
                      </Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </header>
            </Col>
          </Row>
        </Container>
      </div>
      <Switch>
        <Route exact path="/portfolio-react/" component={Home} />
        <Route path="/portfolio-react/webwitchcraft" component={WebWitchcraft} />
        <Route path="/portfolio-react/webpaintings" component={WebPaintings} />
      </Switch>
    </div>
  );
};
export default App;
