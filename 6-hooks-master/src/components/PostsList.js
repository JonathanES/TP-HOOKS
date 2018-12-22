import React, { useState, useEffect, useRef } from 'react';
import Post from './Post';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const inputTitle = useRef("");
  const inputBody = useRef("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((response) => {
        setPosts(response)
      })
      .catch(() => console.log('Sorry an error occured !'));
  }, []);

  const onSubmitPost = () => {
    const post = {
      "title": inputTitle.current.value,
      "body": inputBody.current.value
    }
    posts.push(post);
    setPosts(posts)
  };

  return (
    <div>
      <div>
        <input ref={inputTitle} type="text" />
        <input ref={inputBody} type="text" />
        <button onClick={onSubmitPost}>Ajout</button>
      </div>
      <ul style={{ listStyle: 'none', width: '800px' }}>
        {posts.map(post => (
          <Post data={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
