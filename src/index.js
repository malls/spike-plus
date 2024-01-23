import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: async () => {
          return { data: []}
          return fetch("/api/home").then((res) => res.json());
        },
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
        loader: async () => {
          return { data: []}
          return fetch("/api/about").then((res) => res.json());
        },
      },
      {
        path: "contact",
        element: <Contact />,
        loader: async () => {
          return { data: []}
          return fetch("/api/contact").then((res) => res.json());
        },
      },
      {
        path: "work",
        element: <Work />,
        loader: async () => {
          return { data: []}
          return fetch("/api/work").then((res) => res.json());
        },
      },
    ],
  },
]);

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <RouterProvider router={router} />
  );

reportWebVitals();
