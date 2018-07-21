import React, {Component} from 'react';
import Title from './components/title';
import Articles from './components/articles';
import Search from './components/search';
import axios from 'axios';

const API_KEY = '5c36ad90511f463fa29cd47d247f4150';

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