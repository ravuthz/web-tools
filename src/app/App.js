import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Container } from 'react-bootstrap';

import TopNavBar from '../components/TopNavBar';
import TwoFactorAuthenticator from '../components/TwoFactorAuthenticator';

import "./App.css";

function App() {
  return (
    <Container fluid>
      <Router>
        <TopNavBar title="Web Tools"/>
        <Routes>
          <Route path="/2fa" element={<TwoFactorAuthenticator />}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
