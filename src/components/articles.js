import React from 'react';
import axios from 'axios';

const API_KEY = '5c36ad90511f463fa29cd47d247f4150';

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
    posts: []
  }
}

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`)
    .then(res => {
      console.log(res.data.articles)
      this.setState({posts: res.data.articles})
    })
  }

  render() {
    return(
      <div>
          {this.state.posts.map(post =>
            <p key={post.id}>
            <a href={post.url}>{post.title}</a>
            </p>)}
      </div>
    );
  }
}


export default Articles;