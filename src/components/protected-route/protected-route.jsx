import { Navigate, Outlet } from 'react-router-dom'
import MainWindow from '../main/main_window/MainWindow'

function ProtectedRoute({ redirectPath = '/login', isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={Boolean} />
  }

  return <MainWindow> <Outlet/> </MainWindow>
}

export default ProtectedRoute
