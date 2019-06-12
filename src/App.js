import React from 'react';
import Header from './template/Header';
import Footer from './template/Footer';
import Nav from './template/Nav';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <Route exact path="/" render={
              props => (
                <React.Fragment>
                  <Home />
                </React.Fragment>
              )
            }></Route>
            <Route path="/about" component={About}></Route>

          </div>
        </div>

        <Footer />
      </div>

    </BrowserRouter>

  );
}

export default App;
