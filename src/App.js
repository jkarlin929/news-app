import React, {Component} from 'react';
import Title from './components/title';
import Search from './components/search';
import axios from 'axios';
import './App.css';

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
    console.log(articles)
    if (articles) {
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
        <div className="articles" key={index}>
          <ul>
            <li>
              Title: {article.title}
            </li>

            <li>
              Description: {article.description}
            </li>

            <li>
               <a href={article.url}>Link to Article</a>
            </li>

            <li>
              Source: {article.source.name}
            </li>

            <li>
              Date and Time Published: {article.publishedAt}
            </li>
          </ul>
        </div>
        )}
      </div>
    );
  }
}

export default App;
