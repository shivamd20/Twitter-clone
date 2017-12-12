import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Feeds from './feeds.js';

// App Bar
//Status
// Feeds
//Tweet{
  // in top pic,from, id, time,
  // in middle tweet, photo(if there)
  // in bottom <comments, retweets, Likes, Direct Message>
//}

//



const AppBarTop = () => (
  <AppBar
    title='twitter'
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{position: 'fixed',
    
    }
    }
  />
);



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App" style={{
        backgroundColor:"#e0ffff"
      }}>
        <AppBarTop  style={{
      }}/>
        <Feeds/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
