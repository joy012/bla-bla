import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './ccomponents/Header/Header';
import NewsFeed from './ccomponents/NewsFeed/NewsFeed';
import PostDetail from './ccomponents/PostDetail/PostDetail';
import NoMatch from './ccomponents/NoMatch/NoMatch';
import List from './ccomponents/List/List';


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
          <Route path="/friends">
            <List></List>
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
