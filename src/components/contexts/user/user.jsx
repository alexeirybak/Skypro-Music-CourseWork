import React, { useContext } from 'react'

const UserContext = React.createContext(null)

export function useUser() {
  const { user } = useContext(UserContext)
  return user
}

export function useSetUser() {
  const { setUser } = useContext(UserContext)
  return setUser
}

export default UserContext
