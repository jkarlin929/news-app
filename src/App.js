import React, {Component} from 'react';
import Title from './components/title';
import Search from './components/search';
import axios from 'axios';

class App extends Component {
  state = {
    articles: [],
    error: ""
  }

  getNews = (e) => {
    e.preventDefault();
  const keyWord = e.target.elements.keyword.value;
  axios.get(`https://newsapi.org/v2/everything?q=${keyWord}&apiKey=5c36ad90511f463fa29cd47d247f4150`)
  .then(res => {
    const articles = res.data.articles;
    if (articles) {
      console.log('this is articles', articles);
      this.setState({
        articles,
        error: ""
      });
    } else {
      this.setState({
        articles: undefined,
        error: "Please enter a keyword"
      })
    }
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
              {article.title},
            </li>

            <li>
              {article.description},
            </li>

            <li>
               <a href={article.url}>Link to Article</a>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default App;