import React, { Suspense, lazy } from 'react';
import Footer from './template/Footer';
import Nav from './template/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import NotFound from './components/NotFound/NotFound';
import Users from './routes/Users';
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="App">
            <Nav></Nav>
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/about" component={About}></Route>
                  <Route path="/users" component={Users}></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
