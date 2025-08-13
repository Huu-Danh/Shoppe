import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayuout'
import Profile from './pages/Profile'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'
import path from './constants/path'
// eslint-disable-next-line react-refresh/only-export-components
function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}
// eslint-disable-next-line react-refresh/only-export-components
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}
export default function useRouteElements() {
  return (
    <Routes>
      <Route
        path={path.home}
        index
        element={
          <MainLayout>
            <ProductList />
          </MainLayout>
        }
      />
      <Route element={ProtectedRoute()}>
        <Route
          path={path.profile}
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
      </Route>
      <Route element={RejectedRoute()}>
        <Route
          path={path.login}
          element={
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          }
        />
        <Route
          path={path.register}
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
