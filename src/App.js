import React, {Component} from 'react';
import Title from './components/title';
import Articles from './components/articles';
import Search from './components/search';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Search />
        <Articles />
      </div>
    );
  }
}

export default App;