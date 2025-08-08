import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayuout'

export default function useRouteElements() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <MainLayout>
            <ProductList />
          </MainLayout>
        }
      />
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
