import React from 'react'
import { Posts } from './Posts/Posts'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button';

export const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/posts/new",)
  }
  return (
    <div className='home'>
      <div className="home__top">
        <Button onClick={handleClick}>Создать пост</Button>
      </div>
      <Posts />
    </div>
  )
}
