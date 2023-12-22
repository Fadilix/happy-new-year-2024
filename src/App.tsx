import React from 'react'
import { RouterProvider } from "react-router-dom"
import { routes } from './routes/routes';
import Snowfall from 'react-snowfall';
import { Toaster  } from "react-hot-toast"
import { Analytics } from '@vercel/analytics/react';


const App: React.FC = () => {
  return (
    <div>
      <Snowfall />
      <Toaster />
      <Analytics />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App;