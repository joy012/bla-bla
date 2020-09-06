import React from 'react';
import './App.css';
import Header from './ccomponents/Header/Header';
import NewsFeed from './ccomponents/NewsFeed/NewsFeed';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostDetail from './ccomponents/PostDetail/PostDetail';
import NoMatch from './ccomponents/NoMatch/NoMatch';

function App() {
  return (
    <div className="bg-color">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <NewsFeed />
          </Route>
          <Route path='/post/:userId'>
            <PostDetail />
          </Route>
          <Route exact path="/">
            <NewsFeed />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
