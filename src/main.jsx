import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import {RouterProvider} from 'react-router-dom'
import router from './routes.jsx'
import Home from './pages/Home'
import ListUsers from './pages/ListUsers'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>,
)
