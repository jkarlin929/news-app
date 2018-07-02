import React from 'react';
import Title from './components/title';
import Stories from './components/stories';
import Search from './components/search';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Search />
        <Stories />
      </div>
    );
  }
}

export default App;