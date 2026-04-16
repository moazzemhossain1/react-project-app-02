import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './conponents/Root.jsx';
import Naveber from './conponents/naveber/Naveber.jsx';
import Home from './conponents/home/Home.jsx';
import Timeline from './conponents/Timeline/Timeline.jsx';
import Store from './conponents/Timeline/Store/Store.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,
        loader:()=> fetch('data.json'),
        Component:Home,
        },
      {path:"timeline", Component:Timeline,},
      {path:"stas", Component:Store}

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
