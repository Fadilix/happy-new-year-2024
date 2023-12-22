import React from 'react'
import { RouterProvider } from "react-router-dom"
import { routes } from './routes/routes';
import Snowfall from 'react-snowfall';
import { Toaster  } from "react-hot-toast"


const App: React.FC = () => {
  return (
    <div>
      <Snowfall />
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App;