import React, { useState } from 'react';
import FavouriteToggle from './FavouriteToggle';
import ScoreCounter from './ScoreCounter';

const Post = ({ data, defaultBody = false }) => {
  const [body, setBody] = useState(defaultBody);

  return (
    <li
      style={{
        backgroundColor: 'white',
        color: '#333',
        margin: '5px',
        padding: '10px',
        fontSize: '11pt',
        cursor: 'pointer'
      }}
    >

      <span style={{ fontWeight: '900' }} onClick={() => setBody(body ? false : true)}>
        {
          body ? data.body : data.title
        }
      </span>
      <div style={{ float: 'right' }}>
        <ScoreCounter style={{display: 'inline-block'}}/>
        <FavouriteToggle  style={{display: 'inline-block'}}/>
      </div>

    </li>
  )
}

export default Post;
