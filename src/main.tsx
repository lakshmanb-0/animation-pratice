import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project1 from './pages/1/Project1';
import Home from './pages/1/subPages/Home';
import About from './pages/1/subPages/About';
import Contact from './pages/1/subPages/Contact';
import { gsapLoader } from './pages/1/components/gsapLoader';
import App from './App';

const router = createBrowserRouter([
  // project 1 
  {
    path: '/',
    element: <App />,
  },
  {
    path: "/1",
    errorElement: 'No Page Located',
    children: [
      {
        path: "/1",
        element: <Project1 >
          <Home />
        </Project1>,
        loader: gsapLoader
      },
      {
        path: "/1/about",
        element: <Project1 >
          <About />
        </Project1>,
        loader: gsapLoader
      },
      {
        path: "/1/contact",
        element: <Project1 >
          <Contact />
        </Project1>,
        loader: gsapLoader
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
