import React from 'react'
import {RouterProvider} from "react-router-dom"
import { routes } from './routes/routes';
import Snowfall from 'react-snowfall';


const App: React.FC = () => {
  return (
    <div>
    <Snowfall />

      <RouterProvider router={routes} />
    </div>
  )
}

export default App;