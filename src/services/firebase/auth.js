import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { app } from './base'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])

  console.log(currentUser)

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node
}
