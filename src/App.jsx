import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from '@pages/Landing'
import Login from '@pages/Login'
import Home from '@pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
