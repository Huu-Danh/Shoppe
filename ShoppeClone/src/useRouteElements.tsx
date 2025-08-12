import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayuout'
import Profile from './pages/Profile'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

// eslint-disable-next-line react-refresh/only-export-components
function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
// eslint-disable-next-line react-refresh/only-export-components
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
}
export default function useRouteElements() {
  return (
    <Routes>
      <Route
        path='/'
        index
        element={
          <MainLayout>
            <ProductList />
          </MainLayout>
        }
      />
      <Route element={ProtectedRoute()}>
        <Route
          path='/Profile'
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
      </Route>
      <Route element={RejectedRoute()}>
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
      </Route>
    </Routes>
  )
}
