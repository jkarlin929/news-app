import React, {Component} from 'react';
import Title from './components/title';
import Articles from './components/articles';
import Search from './components/search';
import axios from 'axios';

const API_KEY = '5c36ad90511f463fa29cd47d247f4150';

class App extends Component {
  state = {
    queries: []
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`)
    .then(res => {
      console.log(res.data.articles)
      this.setState({queries: res.data.articles})
    })
  }

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