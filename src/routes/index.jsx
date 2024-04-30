import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from '../error-page';
import Dashboard from '../pages/Dashboard';
import Tab from '../pages/Tab';
import Todo from '../pages/Todo';
import Carousel from '../pages/Carousel';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/components/tab',
        element: <Tab />,
      },
      {
        path: '/components/todo',
        element: <Todo />,
      },
      {
        path: '/components/carousel',
        element: <Carousel />,
      },
    ],
  },
]);

export default router;
