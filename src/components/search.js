import React from 'react';

class Search extends React.Component {
  render() {
    return(
      <div>
        <form>
          <input type="text" name="text" placeholder="Enter Keyword..."/>
          <button>Get News</button>
        </form>
      </div>
    );
  }
}

export default Search;