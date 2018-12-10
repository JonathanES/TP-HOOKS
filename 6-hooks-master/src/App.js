import React from 'react';
import './App.css';
import PostsList from './components/PostsList';
import postsMock from './posts-mock';

const App = () => {
  return (
    <div>
      <header className="App-header">
        <PostsList posts={postsMock} />
      </header>
    </div>
  );
};

export default App;
