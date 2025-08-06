import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'

export default function useRouteElements() {
  return (
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route
        path='/login'
        element={
          <RegisterLayout>
            <Login />
          </RegisterLayout>
        }
      />
      <Route
        path='/register'
        element={
          <RegisterLayout>
            <Register />
          </RegisterLayout>
        }
      />
    </Routes>
  )
}
