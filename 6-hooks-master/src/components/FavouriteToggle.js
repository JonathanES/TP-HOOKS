import React, {useState} from 'react';

const FavouriteToggle = ({ defaultIsActive = false, style = {} }) => {
  const [isActive, setIsActive] = useState(defaultIsActive);
  return(
    <span style={style} onClick={() => setIsActive(isActive ? false : true)}>{isActive ? '♥️' : '♡'}</span>
  )
}

export default FavouriteToggle;
