import React from 'react'
import {  useNavigate } from 'react-router-dom';

export const Post = ({content, created, id}) => {
  const date = new Date(created);
  const fullDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString().slice(0,5)}`;
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/posts/${id}`)
  }

  return (
    <div className='post' onClick={handleClick}>
      <span className="post__date">{fullDate}</span>
      <p className="post__text">{content}</p>
    </div>
  )
}
