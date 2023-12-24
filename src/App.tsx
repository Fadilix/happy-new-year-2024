import React from 'react'
import { RouterProvider } from "react-router-dom"
import { routes } from './routes/routes';
import Snowfall from 'react-snowfall';
import { Toaster } from "react-hot-toast"
import { Analytics } from '@vercel/analytics/react';
import CustomCursor from './components/CustomCursor';


const App: React.FC = () => {
  return (
    <div>
      <Snowfall />
      <Toaster />
      <Analytics />
      <CustomCursor />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App;