import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import NotFound from './components/NotFound/NotFound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavDrawer from './components/layout/NavDrawer';
const Users = lazy(() => import('./routes/Users'))
const Posts = lazy(() => import('./routes/Posts'))
const UserDefail = lazy(() => import('./routes/UserDefail'));
const UserInsert = lazy(() => import('./routes/UserInsert'));
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

function App() {
  return (
    <Router>
      <MuiThemeProvider>
        <div>      
        <NavDrawer />
          <div className="App">
            <div className="container">
              <div className="row">
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                      <Route path="/" exact component={Home}></Route>
                      <Route path="/about" component={About}></Route>
                      <Route path="/users" exact component={Users}></Route>
                      <Route path="/users/:id" exact component={UserDefail}></Route>
                      <Route path="/users-insert" exact component={UserInsert}></Route>
                      <Route path="/posts" exact component={Posts}></Route>
                      <Route component={NotFound}></Route>
                    </Switch>
                  </Suspense>
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
