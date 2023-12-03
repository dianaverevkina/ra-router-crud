import { Suspense } from 'react';
import { Post } from '../../Post/Post';
import { Await, defer, useLoaderData } from 'react-router-dom';

export const postsLoader = async ({request, params}) => {
  const response =  fetch('http://localhost:7070/posts').then(res => res.json());

  return defer({ response });
}

export const Posts = () => {
  const {response} = useLoaderData();

  return (
    <div className='home__posts posts'>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={response}>
          {(resolved) => resolved.map(post => <Post key={post.id} {...post}/>)}
        </Await>
      </Suspense>
    </div>
  )
}
