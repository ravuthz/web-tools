import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Container } from 'react-bootstrap';

import TopNavBar from '../components/TopNavBar';
import TwoFactorAuthenticator from '../components/TwoFactorAuthenticator';
import WhiteSpaceStarReplacer from '../components/WhiteSpaceStarReplacer';
import FaceBookIdFinder from '../components/FaceBookIdFinder';

import "./App.css";

function App() {
  return (
    <Container fluid>
      <Router basename={process.env.PUBLIC_URL}>
        <TopNavBar title="Web Tools"/>
        <Routes>
          <Route path="/2fa" element={<TwoFactorAuthenticator />}></Route>
          <Route path="/space" element={<WhiteSpaceStarReplacer />}></Route>
          <Route path="/fbid" element={<FaceBookIdFinder />}></Route>
          <Route path="/" element={<h1>Welcome to Web Tools</h1>}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
