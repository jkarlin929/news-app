import React, {Component} from 'react';
import Title from './components/title';
import Search from './components/search';
import axios from 'axios';

class App extends Component {
  state = {
    articles: []
  }

  getNews = (e) => {
    e.preventDefault();
  const keyWord = e.target.elements.keyword.value;
  axios.get(`https://newsapi.org/v2/everything?q=${keyWord}&apiKey=5c36ad90511f463fa29cd47d247f4150`)
  .then(res => {
    const articles = res.data.articles;
    this.setState({ articles })
    console.log('this is articles', articles);
  })
}

  render() {
    return (
      <div>
        <Title />
        <Search getNews={this.getNews}  />
        {this.state.articles.map((article, index) =>
          <ul key={index}>
            <li>
              {article.url}, {article.title}
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default App;