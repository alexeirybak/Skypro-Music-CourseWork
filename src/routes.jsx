import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/not_found/NotFound'
import Fav from './pages/fav/Fav'
import Category from './pages/category/category'
import ProtectedRoute from './components/protected-route/protected-route'
import Main from './pages/main/Main'
import AuthPage from './pages/auth/Authpage'
import UserContext from './components/contexts/user/user'

function AppRoutes({
  loading,
  tracklistError,
  selectedTrack,
  setSelectedTrack,
}) {
  // функция, необходимаяя для установки начального значения в  юзер стейт
  const userFromLocalStorage = () => {
    const userTemp = JSON.parse(localStorage.getItem('user'))
    return userTemp || null
  }
  const [user, setUser] = useState(userFromLocalStorage())
  const token = localStorage.getItem('token')
  // const user = localStorage.getItem('user')
  // console.log(token)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
          <Route
            path="/"
            element={
              <Main
                loading={loading}
                tracklistError={tracklistError}
                selectedTrack={selectedTrack}
                setSelectedTrack={setSelectedTrack}
              />
            }
          />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/fav" element={<Fav />} />
        </Route>
        <Route path="/login" element={<AuthPage isLoginMode />} />
        <Route path="/register" element={<AuthPage isLoginMode={false} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default AppRoutes
