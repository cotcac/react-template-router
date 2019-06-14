import React, { Suspense, lazy } from 'react';
import Header from './template/Header';
import Footer from './template/Footer';
import Nav from './template/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Header />
          <Nav></Nav>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
