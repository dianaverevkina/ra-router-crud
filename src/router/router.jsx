import { createBrowserRouter } from "react-router-dom"
import { Root } from "../components/Root/Root"
import { ErrorPage } from "../components/ErrorPage/ErrorPage"
import { Home } from "../components/Home/Home"
import { CreatePost, createPostAction } from "../components/CreatePost/CreatePost"
import { PostView, postLoader } from '../components/PostView/PostView';
import { EditPost, editPostAction, editPostLoader } from '../components/EditPost/EditPost';
import { postsLoader } from '../components/Home/Posts/Posts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: postsLoader,
      },
      {
        path: 'posts/new',
        element: <CreatePost />,
        action: createPostAction,
      },
      {
        path: 'posts/:id',
        element: <PostView />,
        loader: postLoader,
      },
      {
        path: 'posts/edit/:id',
        element: <EditPost />,
        action: editPostAction,
        loader: editPostLoader,
      },
    ]
  }
]);