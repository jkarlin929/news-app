import React from 'react';

const Search = (props) => {
  return(
    <div>
      <form onSubmit={props.getNews}>
        <input type="text" name="keyword" placeholder="Enter Keyword"/>
        <button>Get News</button>
      </form>
    </div>
  );
}

export default Search;
