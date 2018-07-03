import React from 'react';

const API_KEY = '5c36ad90511f463fa29cd47d247f4150';

class Stories extends React.Component{
  getStories = async () => {
    const api_call = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2018-07-02&sortBy=popularity&apiKey=${API_KEY}`);

    const data = await api_call.json();
    console.log(data)
  }



  render() {
    return(
      <div>
      <p>Stories</p>
      </div>
    );
  }
}


export default Stories;